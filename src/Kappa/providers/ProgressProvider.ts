import {
    ChapterReadActionQueueProcessingResult,
    Form,
    MangaProgress,
    MangaProgressProviding,
    SourceManga,
    TrackedMangaChapterReadAction,
} from "@paperback/types";
import { KavitaProgressForm } from "../forms/KavitaProgressForm";
import { KappaExtension } from "../main";

export class ProgressProvider implements MangaProgressProviding {
    constructor(private extension: KappaExtension) {}

    getMangaProgressManagementForm(sourceManga: SourceManga): Promise<Form> {
        return Promise.resolve(new KavitaProgressForm(this, sourceManga));
    }
    getMangaProgress(
        sourceManga: SourceManga,
    ): Promise<MangaProgress | undefined> {
        return this.extension.kavitaApi
            .getContinuePoint(sourceManga.mangaId)
            .then((chapter) => {
                if (chapter === undefined) {
                    return Promise.reject(
                        new Error("Failed to get manga progress"),
                    );
                }

                return Promise.resolve({
                    sourceManga: sourceManga,
                    lastReadChapter: {
                        chapterId: chapter.id!.toString(),
                        sourceManga: sourceManga,
                        title: chapter.title ?? undefined,
                        creationDate: chapter.createdUtc
                            ? new Date(chapter.createdUtc)
                            : undefined,
                        publishDate: chapter.releaseDate
                            ? new Date(chapter.releaseDate)
                            : undefined,
                        langCode: chapter.language ?? "EN",
                        chapNum: chapter.minNumber!,
                        additionalInfo: {
                            pages: chapter.pages!.toString(),
                            pagesRead: chapter.pagesRead!.toString(),
                            volumeId: chapter.volumeId!.toString(),
                        },
                    },
                });
            })
            .catch((error) => {
                return Promise.reject(
                    new Error("Failed to get manga progress", {
                        cause: error,
                    }),
                );
            });
    }
    async processChapterReadActionQueue(
        actions: TrackedMangaChapterReadAction[],
    ): Promise<ChapterReadActionQueueProcessingResult> {
        const successfulItems: string[] = [];
        const failedItems: string[] = [];

        for (const action of actions) {
            const mangaId = action.sourceManga.mangaId;
            const chapterId = action.readChapter.chapterId;

            await this.extension.kavitaApi
                .setProgress({
                    libraryId: parseInt(
                        action.sourceManga.mangaInfo.additionalInfo!.libraryId,
                    ),
                    seriesId: parseInt(mangaId),
                    volumeId: parseInt(
                        action.readChapter.additionalInfo!.volumeId,
                    ),
                    chapterId: parseInt(chapterId),
                    pageNum: parseInt(action.readChapter.additionalInfo!.pages),
                })
                .then((success) => {
                    if (success) {
                        successfulItems.push(chapterId);
                    } else {
                        failedItems.push(chapterId);
                    }
                })
                .catch((error) => {
                    console.log(
                        `Failed to set progress for ${mangaId} chapter ${chapterId}: ${error}`,
                    );
                    failedItems.push(chapterId);
                });
        }

        console.log(`Successful items: ${successfulItems.join(", ")}`);
        console.log(`Failed items: ${failedItems.join(", ")}`);

        return Promise.resolve({
            successfulItems: successfulItems,
            failedItems: failedItems,
        });
    }
}
