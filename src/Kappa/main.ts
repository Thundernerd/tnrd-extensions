import {
    Chapter,
    ChapterDetails,
    ChapterProviding,
    ChapterReadActionQueueProcessingResult,
    DiscoverSection,
    DiscoverSectionItem,
    DiscoverSectionProviding,
    Extension,
    Form,
    MangaProgress,
    MangaProgressProviding,
    MangaProviding,
    PagedResults,
    SearchFilter,
    SearchQuery,
    SearchResultItem,
    SearchResultsProviding,
    SettingsFormProviding,
    SourceManga,
    TrackedMangaChapterReadAction,
} from "@paperback/types";
import { KavitaApi } from "./KavitaApi";
import { ChapterProvider } from "./providers/ChapterProvider";
import { MangaProvider } from "./providers/MangaProvider";
import { ProgressProvider } from "./providers/ProgressProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { SectionProvider } from "./providers/SectionProvider";
import { SettingsProvider } from "./providers/SettingsProvider";

export class KappaExtension
    implements
        Extension,
        SearchResultsProviding,
        MangaProviding,
        ChapterProviding,
        SettingsFormProviding,
        DiscoverSectionProviding,
        MangaProgressProviding
{
    chatperProvider: ChapterProvider;
    mangaProvider: MangaProvider;
    progressProvider: ProgressProvider;
    searchProvider: SearchProvider;
    sectionProvider: SectionProvider;
    settingsProvider: SettingsProvider;
    kavitaApi: KavitaApi;

    constructor() {
        this.chatperProvider = new ChapterProvider(this);
        this.mangaProvider = new MangaProvider(this);
        this.progressProvider = new ProgressProvider(this);
        this.searchProvider = new SearchProvider(this);
        this.sectionProvider = new SectionProvider(this);
        this.settingsProvider = new SettingsProvider(this);
        this.kavitaApi = new KavitaApi(this);
    }
    getMangaProgressManagementForm(sourceManga: SourceManga): Promise<Form> {
        return this.progressProvider.getMangaProgressManagementForm(
            sourceManga,
        );
    }
    getMangaProgress(
        sourceManga: SourceManga,
    ): Promise<MangaProgress | undefined> {
        return this.progressProvider.getMangaProgress(sourceManga);
    }
    processChapterReadActionQueue(
        actions: TrackedMangaChapterReadAction[],
    ): Promise<ChapterReadActionQueueProcessingResult> {
        console.log("[processChapterReadActionQueue] entered");
        return this.progressProvider.processChapterReadActionQueue(actions);
    }
    getDiscoverSections(): Promise<DiscoverSection[]> {
        return this.sectionProvider.getDiscoverSections();
    }
    getDiscoverSectionItems(
        section: DiscoverSection,
    ): Promise<PagedResults<DiscoverSectionItem>> {
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
    getSearchResults(
        query: SearchQuery,
    ): Promise<PagedResults<SearchResultItem>> {
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
