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

    async getMangaProgress(
        sourceManga: SourceManga,
    ): Promise<MangaProgress | undefined> {
        try {
            const hasProgress = await this.extension.kavitaApi.getHasProgress(
                sourceManga.mangaId,
            );
            if (hasProgress === undefined) {
                return Promise.reject(
                    new Error("Failed to get manga progress"),
                );
            }

            const chapters =
                await this.extension.chatperProvider.getChapters(sourceManga);

            if (chapters === undefined) {
                return Promise.reject(
                    new Error("Failed to get manga progress"),
                );
            }

            if (!hasProgress) {
                return Promise.resolve({
                    sourceManga: sourceManga,
                    lastReadChapter: chapters[0],
                });
            }

            const dto = await this.extension.kavitaApi.getContinuePoint(
                sourceManga.mangaId,
            );

            if (dto === undefined) {
                return Promise.reject(
                    new Error("Failed to get manga progress"),
                );
            }

            const lastReadChapter = chapters.find(
                (item) => item.chapterId == dto.id!.toString(),
            );
            if (lastReadChapter === undefined) {
                return Promise.reject(
                    new Error("Failed to get manga progress"),
                );
            }

            return Promise.resolve({
                sourceManga: sourceManga,
                lastReadChapter: lastReadChapter,
            });
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get manga progress", {
                    cause: error,
                }),
            );
        }
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
