import { Chapter, ChapterDetails, ChapterProviding, DiscoverSection, DiscoverSectionItem, DiscoverSectionProviding, Extension, Form, MangaProviding, PagedResults, SearchFilter, SearchQuery, SearchResultItem, SearchResultsProviding, SettingsFormProviding, SourceManga } from "@paperback/types";
import { SettingsProvider } from "./providers/SettingsProvider";
import { KavitaApi } from "./KavitaApi";
import { SearchProvider } from "./providers/SearchProvider";
import { ChapterProvider } from "./providers/ChapterProvider";
import { MangaProvider } from "./providers/MangaProvider";
import { SectionProvider } from "./providers/SectionProvider";

export class KappaExtension implements Extension, SearchResultsProviding, MangaProviding, ChapterProviding, SettingsFormProviding, DiscoverSectionProviding {
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
    getDiscoverSectionItems(section: DiscoverSection): Promise<PagedResults<DiscoverSectionItem>> {
        return this.sectionProvider.getDiscoverSectionItems(section);
    }
    getSettingsForm(): Promise<Form> {
        return this.settingsProvider.getSettingsForm();
    }
    getChapters(sourceManga: SourceManga): Promise<Chapter[]> {
        return this.chatperProvider.getChapters(sourceManga);
    }
    getChapterDetails(chapter: Chapter): Promise<ChapterDetails> {
        return this.chatperProvider.getChapterDetails(chapter);
    }
    processTitlesForUpdates?(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getSearchFilters(): Promise<SearchFilter[]> {
        return this.searchProvider.getSearchFilters();
    }
    getSearchResults(query: SearchQuery): Promise<PagedResults<SearchResultItem>> {
        return this.searchProvider.getSearchResults(query);
    }
    getMangaDetails(mangaId: string): Promise<SourceManga> {
        return this.mangaProvider.getMangaDetails(mangaId);
    }
    async initialise(): Promise<void> {
        // Initialization logic here
        console.log("Kappa Extension Initialized");
    }

}

export const Kappa = new KappaExtension();