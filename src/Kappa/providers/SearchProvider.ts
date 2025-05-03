import { ContentRating, PagedResults, SearchFilter, SearchQuery, SearchResultItem } from "@paperback/types";
import { KappaExtension } from "../main";
import { SearchResultDto, SearchResultGroupDto } from "../gen";
import { URLBuilder } from "../utils/URLBuilder";

export class SearchProvider {
    constructor(private extension: KappaExtension) { }

    async getSearchFilters(): Promise<SearchFilter[]> {
        return Promise.resolve([]);
    }

    async getSearchResults(query: SearchQuery, metadata: unknown | undefined): Promise<PagedResults<SearchResultItem>> {
        const result = await this.extension.kavitaApi.search(query.title);
        if (result == null) {
            return {
                items: [],
                metadata: null
            };
        }
        return this.getPagedResults(result);
    }

    private getPagedResults(result: SearchResultGroupDto): PagedResults<SearchResultItem> {
        if (result.series == null) {
            return {
                items: [],
                metadata: null
            };
        }
        return {
            items: this.getSearchResultItems(result.series),
            metadata: null
        };
    }

    private getSearchResultItems(items: SearchResultDto[]): SearchResultItem[] {
        return items.map((item) => this.getSearchResultItem(item));
    }

    private getSearchResultItem(item: SearchResultDto): SearchResultItem {
        return {
            title: item.name!,
            mangaId: item.seriesId!.toString(),
            contentRating: ContentRating.EVERYONE,
            imageUrl: new URLBuilder(this.extension.settingsProvider.ApiUrl.value)
                .addPath("api")
                .addPath("image")
                .addPath("series-cover")
                .addQuery("seriesId", item.seriesId!.toString())
                .addQuery("apiKey", this.extension.settingsProvider.ApiKey.value)
                .build()
        };
    }
}