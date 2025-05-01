import { Chapter, ChapterDetails, ChapterProviding, Extension, Form, MangaProgress, MangaProviding, PagedResults, SearchFilter, SearchQuery, SearchResultItem, SearchResultsProviding, SettingsFormProviding, SourceManga, UpdateManager } from "@paperback/types";
import { SettingsProvider } from "./providers/SettingsProvider";

export class KavitaExtension implements Extension, SearchResultsProviding, MangaProviding, ChapterProviding, SettingsFormProviding {
    private settingsProvider: SettingsProvider = new SettingsProvider();

    getSettingsForm(): Promise<Form> {
        return this.settingsProvider.getSettingsForm();
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
    async initialise(): Promise<void> {
        // Initialization logic here
        console.log("Kavita Extension Initialized");
    }
    
}

export const Kavita = new KavitaExtension();