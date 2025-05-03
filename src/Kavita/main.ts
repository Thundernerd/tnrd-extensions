import { Chapter, ChapterDetails, ChapterProviding, DiscoverSection, DiscoverSectionItem, DiscoverSectionProviding, Extension, Form, MangaProviding, PagedResults, SearchFilter, SearchQuery, SearchResultItem, SearchResultsProviding, SettingsFormProviding, SourceManga, UpdateManager } from "@paperback/types";
import { SettingsProvider } from "./providers/SettingsProvider";
import { KavitaApi } from "./KavitaApi";
import { SearchProvider } from "./providers/SearchProvider";
import { ChapterProvider } from "./providers/ChapterProvider";
import { MangaProvider } from "./providers/MangaProvider";
import { SectionProvider } from "./providers/SectionProvider";

export class KavitaExtension implements Extension, SearchResultsProviding, MangaProviding, ChapterProviding, SettingsFormProviding, DiscoverSectionProviding {
    chatperProvider: ChapterProvider;
    mangaProvider: MangaProvider;
    searchProvider: SearchProvider;
    sectionProvider: SectionProvider;
    settingsProvider: SettingsProvider;
    kavitaApi: KavitaApi;

    constructor() {
        this.chatperProvider = new ChapterProvider(this);
        this.mangaProvider = new MangaProvider(this);
        this.searchProvider = new SearchProvider(this);
        this.sectionProvider = new SectionProvider(this);
        this.settingsProvider = new SettingsProvider(this);
        this.kavitaApi = new KavitaApi(this);
    }

    getDiscoverSections(): Promise<DiscoverSection[]> {
        return this.sectionProvider.getDiscoverSections();
    }
    getDiscoverSectionItems(section: DiscoverSection, metadata: unknown | undefined): Promise<PagedResults<DiscoverSectionItem>> {
        return this.sectionProvider.getDiscoverSectionItems(section, metadata);
    }
    getSettingsForm(): Promise<Form> {
        return this.settingsProvider.getSettingsForm();
    }
    getChapters(sourceManga: SourceManga, sinceDate?: Date): Promise<Chapter[]> {
        return this.chatperProvider.getChapters(sourceManga, sinceDate);
    }
    getChapterDetails(chapter: Chapter): Promise<ChapterDetails> {
        return this.chatperProvider.getChapterDetails(chapter);
    }
    processTitlesForUpdates?(updateManager: UpdateManager, lastUpdateDate?: Date): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getSearchFilters(): Promise<SearchFilter[]> {
        return this.searchProvider.getSearchFilters();
    }
    getSearchResults(query: SearchQuery, metadata: unknown | undefined): Promise<PagedResults<SearchResultItem>> {
        return this.searchProvider.getSearchResults(query, metadata);
    }
    getMangaDetails(mangaId: string): Promise<SourceManga> {
        return this.mangaProvider.getMangaDetails(mangaId);
    }
    async initialise(): Promise<void> {
        // Initialization logic here
        console.log("Kavita Extension Initialized");
    }

}

export const Kavita = new KavitaExtension();