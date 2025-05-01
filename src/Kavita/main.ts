import { Chapter, ChapterDetails, ChapterProviding, Extension, Form, MangaProgress, MangaProviding, PagedResults, SearchFilter, SearchQuery, SearchResultItem, SearchResultsProviding, SettingsFormProviding, SourceManga, UpdateManager } from "@paperback/types";

export class KavitaExtension implements Extension, SearchResultsProviding, MangaProviding, ChapterProviding, SettingsFormProviding {
    getSettingsForm(): Promise<Form> {
        throw new Error("Method not implemented.");
    }
    getChapters(sourceManga: SourceManga, sinceDate?: Date): Promise<Chapter[]> {
        throw new Error("Method not implemented.");
    }
    getChapterDetails(chapter: Chapter): Promise<ChapterDetails> {
        throw new Error("Method not implemented.");
    }
    processTitlesForUpdates?(updateManager: UpdateManager, lastUpdateDate?: Date): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getSearchFilters(): Promise<SearchFilter[]> {
        throw new Error("Method not implemented.");
    }
    getSearchResults(query: SearchQuery, metadata: unknown | undefined): Promise<PagedResults<SearchResultItem>> {
        throw new Error("Method not implemented.");
    }
    getMangaDetails(mangaId: string): Promise<SourceManga> {
        throw new Error("Method not implemented.");
    }
    initialise(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

export const Kavita = new KavitaExtension();