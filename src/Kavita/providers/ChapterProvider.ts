import { Chapter, ChapterDetails, ChapterProviding, SourceManga, UpdateManager } from "@paperback/types";
import { KavitaExtension } from "../main";
import { URLBuilder } from "../utils/URLBuilder";

export class ChapterProvider implements ChapterProviding {
    constructor(private readonly extension: KavitaExtension) {
        // Constructor logic here
    }
    getChapters(sourceManga: SourceManga, sinceDate?: Date): Promise<Chapter[]> {
        return this.extension.kavitaApi.getMangaVolumes(sourceManga.mangaId)
            .then((dto) => {
                if (dto === undefined) {
                    return Promise.reject(new Error("Unable to get chapters"));
                }

                if (dto.length === 0) {
                    return [];
                }

                const chapters: Chapter[] = [];

                dto.forEach((volumne) => {
                    volumne.chapters?.forEach((chapter) => {
                        chapters.push({
                            sourceManga: sourceManga,
                            title: chapter.title ?? undefined,
                            creationDate: chapter.createdUtc ? new Date(chapter.createdUtc!) : undefined,
                            publishDate: chapter.releaseDate ? new Date(chapter.releaseDate!) : undefined,
                            chapterId: chapter.id!.toString(),
                            langCode: chapter.language ?? "EN",
                            chapNum: chapter.minNumber!
                        });
                    })
                })

                return chapters;
            })
            .catch((error) => {
                console.error("Error fetching chapters: " + error);
                return Promise.reject(error);
            });
    }
    getChapterDetails(chapter: Chapter): Promise<ChapterDetails> {
        return this.extension.kavitaApi.getChapterDetails(chapter.chapterId)
            .then((dto) => {
                if (dto === undefined) {
                    return Promise.reject(new Error("Unable to get chapter details"));
                }

                if (dto.pages === undefined) {
                    return Promise.reject(new Error("Unable to get chapter pages"));
                }

                const pages: string[] = [];

                for (let i = 0; i < dto.pages; i++) {
                    pages.push(new URLBuilder(this.extension.settingsProvider.ApiUrl.value)
                        .addPath("api")
                        .addPath("Reader")
                        .addPath("image")
                        .addQuery("chapterId", chapter.chapterId)
                        .addQuery("page", i.toString())
                        .addQuery("apiKey", this.extension.settingsProvider.ApiKey.value)
                        .build());
                }

                return {
                    id: chapter.chapterId,
                    mangaId: chapter.sourceManga.mangaId,
                    pages: pages
                };
            })
            .catch((error) => {
                console.error("Error fetching chapter details: " + error);
                return Promise.reject(error);
            });
    }
    processTitlesForUpdates?(updateManager: UpdateManager, lastUpdateDate?: Date): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getMangaDetails(mangaId: string): Promise<SourceManga> {
        throw new Error("Method not implemented.");
    }
}