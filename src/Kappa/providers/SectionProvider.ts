import {
    ChapterUpdatesCarouselItem,
    ContentRating,
    DiscoverSection,
    DiscoverSectionItem,
    DiscoverSectionProviding,
    DiscoverSectionType,
    PagedResults,
    ProminentCarouselItem,
    SimpleCarouselItem,
} from "@paperback/types";
import { KappaExtension } from "../main";
import { URLBuilder } from "../utils/URLBuilder";

export class SectionProvider implements DiscoverSectionProviding {
    constructor(private extension: KappaExtension) {}
    async getDiscoverSections(): Promise<DiscoverSection[]> {
        return [
            {
                id: "onDeck",
                title: "On Deck",
                type: DiscoverSectionType.prominentCarousel,
            },
            {
                id: "recentlyUpdated",
                title: "Recently Updated",
                type: DiscoverSectionType.chapterUpdates,
            },
            {
                id: "newlyAdded",
                title: "Newly Added",
                type: DiscoverSectionType.simpleCarousel,
            },
        ];
    }
    async getDiscoverSectionItems(
        section: DiscoverSection,
    ): Promise<PagedResults<DiscoverSectionItem>> {
        if (section.id === "onDeck") {
            return await this.getOnDeck();
        } else if (section.id === "recentlyUpdated") {
            return await this.getRecentlyUpdated();
        } else if (section.id === "newlyAdded") {
            return await this.getNewlyAdded();
        } else {
            return Promise.reject(new Error("Unknown section"));
        }
    }

    private async getOnDeck(): Promise<PagedResults<DiscoverSectionItem>> {
        return await this.extension.kavitaApi
            .getOnDeck()
            .then((dto) => {
                if (dto === undefined) {
                    return Promise.reject(new Error("Unable to get on deck"));
                }

                const items: ProminentCarouselItem[] = [];
                dto.forEach((item) => {
                    items.push({
                        type: "prominentCarouselItem",
                        mangaId: item.id!.toString(),
                        title: item.name!,
                        contentRating: ContentRating.EVERYONE,
                        imageUrl: new URLBuilder(
                            this.extension.settingsProvider.ApiUrl.value,
                        )
                            .addPath("api")
                            .addPath("image")
                            .addPath("series-cover")
                            .addQuery("seriesId", item.id!.toString())
                            .addQuery(
                                "apiKey",
                                this.extension.settingsProvider.ApiKey.value,
                            )
                            .build(),
                    });
                });

                return {
                    items: items,
                };
            })
            .catch((error) => {
                return Promise.reject(
                    new Error("Failed to get on deck", {
                        cause: error,
                    }),
                );
            });
    }

    private async getRecentlyUpdated(): Promise<
        PagedResults<DiscoverSectionItem>
    > {
        return await this.extension.kavitaApi
            .getRecentlyUpdated()
            .then((dto) => {
                if (dto === undefined) {
                    return Promise.reject(
                        new Error("Unable to get recently updated"),
                    );
                }

                const items: ChapterUpdatesCarouselItem[] = [];
                dto.forEach((item) => {
                    items.push({
                        type: "chapterUpdatesCarouselItem",
                        mangaId: item.seriesId!.toString(),
                        chapterId: item.chapterId!.toString(),
                        publishDate: item.created
                            ? new Date(item.created)
                            : undefined,
                        title: item.seriesName!,
                        contentRating: ContentRating.EVERYONE,
                        imageUrl: new URLBuilder(
                            this.extension.settingsProvider.ApiUrl.value,
                        )
                            .addPath("api")
                            .addPath("image")
                            .addPath("series-cover")
                            .addQuery("seriesId", item.seriesId!.toString())
                            .addQuery(
                                "apiKey",
                                this.extension.settingsProvider.ApiKey.value,
                            )
                            .build(),
                    });
                });

                return {
                    items: items,
                };
            })
            .catch((error) => {
                return Promise.reject(
                    new Error("Failed to get recently updated", {
                        cause: error,
                    }),
                );
            });
    }

    private async getNewlyAdded(): Promise<PagedResults<DiscoverSectionItem>> {
        return await this.extension.kavitaApi
            .getNewlyAdded()
            .then((dto) => {
                if (dto === undefined) {
                    return Promise.reject(
                        new Error("Unable to get newly added"),
                    );
                }

                const items: SimpleCarouselItem[] = [];
                dto.forEach((item) => {
                    items.push({
                        type: "simpleCarouselItem",
                        mangaId: item.id!.toString(),
                        title: item.name!,
                        contentRating: ContentRating.EVERYONE,
                        imageUrl: new URLBuilder(
                            this.extension.settingsProvider.ApiUrl.value,
                        )
                            .addPath("api")
                            .addPath("image")
                            .addPath("series-cover")
                            .addQuery("seriesId", item.id!.toString())
                            .addQuery(
                                "apiKey",
                                this.extension.settingsProvider.ApiKey.value,
                            )
                            .build(),
                    });
                });

                return {
                    items: items,
                };
            })
            .catch((error) => {
                return Promise.reject(
                    new Error("Failed to get newly added", {
                        cause: error,
                    }),
                );
            });
    }
}
