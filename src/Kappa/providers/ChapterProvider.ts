import {
    Chapter,
    ChapterDetails,
    ChapterProviding,
    SourceManga,
} from "@paperback/types";
import { VolumeDto } from "../gen";
import { KappaExtension } from "../main";
import { URLBuilder } from "../utils/URLBuilder";

export class ChapterProvider implements ChapterProviding {
    constructor(private readonly extension: KappaExtension) {
        // Constructor logic here
    }
    getChapters(sourceManga: SourceManga): Promise<Chapter[]> {
        return this.extension.kavitaApi
            .getMangaVolumes(sourceManga.mangaId)
            .then((dto) => {
                if (dto === undefined) {
                    return Promise.reject(new Error("Unable to get chapters"));
                }

                if (dto.length === 0) {
                    return [];
                }

                const idToVolume = dto.reduce(
                    (acc: Record<number, VolumeDto>, entry: VolumeDto) => {
                        acc[entry.id!] = entry;
                        return acc;
                    },
                    {},
                );

                const chapters: Chapter[] = [];

                const sortedChapters = dto
                    .flatMap((x) => x.chapters ?? [])
                    .sort((a, b) => {
                        const aa = a.sortOrder ?? Number.POSITIVE_INFINITY;
                        const bb = b.sortOrder ?? Number.POSITIVE_INFINITY;
                        return aa - bb;
                    });

                for (const chapter of sortedChapters) {
                    let chapterVolume = 0;
                    const vol = chapter.volumeId
                        ? idToVolume[chapter.volumeId]
                        : undefined;
                    if (vol?.minNumber != null)
                        chapterVolume = Math.max(0, vol.minNumber);

                    chapters.push({
                        sourceManga: sourceManga,
                        title:
                            chapter.titleName ?? chapter.title ?? "Chapter ?",
                        creationDate: chapter.createdUtc
                            ? new Date(chapter.createdUtc)
                            : undefined,
                        publishDate: chapter.releaseDate
                            ? new Date(chapter.releaseDate)
                            : undefined,
                        chapterId: chapter.id!.toString(),
                        langCode: chapter.language ?? "EN",
                        chapNum: chapter.sortOrder ?? chapter.minNumber!,
                        additionalInfo: {
                            pages: chapter.pages!.toString(),
                            pagesRead: chapter.pagesRead!.toString(),
                            volumeId: chapter.volumeId!.toString(),
                        },
                        volume: chapterVolume,
                    });
                }

                return chapters;
            })
            .catch((error) => {
                return Promise.reject(
                    new Error("Failed to get chapters", {
                        cause: error,
                    }),
                );
            });
    }
    getChapterDetails(chapter: Chapter): Promise<ChapterDetails> {
        return this.extension.kavitaApi
            .getChapterDetails(chapter.chapterId)
            .then((dto) => {
                if (dto === undefined) {
                    return Promise.reject(
                        new Error("Unable to get chapter details"),
                    );
                }

                if (dto.pages === undefined) {
                    return Promise.reject(
                        new Error("Unable to get chapter pages"),
                    );
                }

                const pages: string[] = [];

                for (let i = 0; i < dto.pages; i++) {
                    pages.push(
                        new URLBuilder(
                            this.extension.settingsProvider.ApiUrl.value,
                        )
                            .addPath("api")
                            .addPath("Reader")
                            .addPath("image")
                            .addQuery("chapterId", chapter.chapterId)
                            .addQuery("page", i.toString())
                            .addQuery(
                                "apiKey",
                                this.extension.settingsProvider.ApiKey.value,
                            )
                            .build(),
                    );
                }

                return {
                    id: chapter.chapterId,
                    mangaId: chapter.sourceManga.mangaId,
                    pages: pages,
                };
            })
            .catch((error) => {
                return Promise.reject(
                    new Error("Failed to get chapter details", {
                        cause: error,
                    }),
                );
            });
    }
    processTitlesForUpdates?(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getMangaDetails(): Promise<SourceManga> {
        throw new Error("Method not implemented.");
    }
}
