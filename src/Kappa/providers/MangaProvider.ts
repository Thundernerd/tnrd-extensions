import {
    ContentRating,
    MangaInfo,
    MangaProviding,
    SourceManga,
} from "@paperback/types";
import { SeriesDto, SeriesMetadataDto } from "../gen";
import { KappaExtension } from "../main";
import { URLBuilder } from "../utils/URLBuilder";

export class MangaProvider implements MangaProviding {
    constructor(private readonly extension: KappaExtension) {
        // Constructor logic here
    }
    getMangaDetails(mangaId: string): Promise<SourceManga> {
        return Promise.all([
            this.extension.kavitaApi.getMangaDetails(mangaId),
            this.extension.kavitaApi.getMangaMetadata(mangaId),
        ])
            .then(([dto, metadata]) => {
                if (!dto || !metadata) {
                    return Promise.reject(
                        new Error("Unable to get manga details"),
                    );
                }

                const manga: SourceManga = {
                    mangaId: mangaId,
                    mangaInfo: this.createMangaInfo(dto, metadata),
                };
                return manga;
            })
            .catch((error) => {
                return Promise.reject(
                    new Error("Failed to get manga details", {
                        cause: error,
                    }),
                );
            });
    }

    private createMangaInfo(
        details: SeriesDto,
        metadata: SeriesMetadataDto,
    ): MangaInfo {
        return {
            primaryTitle: details.name!,
            secondaryTitles: this.toStringArray(
                details.originalName,
                details.localizedName,
            ),
            synopsis: metadata.summary!,
            contentRating: ContentRating.EVERYONE,
            thumbnailUrl: new URLBuilder(
                this.extension.settingsProvider.ApiUrl.value,
            )
                .addPath("api")
                .addPath("image")
                .addPath("series-cover")
                .addQuery("seriesId", details.id!.toString())
                .addQuery(
                    "apiKey",
                    this.extension.settingsProvider.ApiKey.value,
                )
                .build(),
        };
    }

    private toStringArray(...args: (string | null | undefined)[]): string[] {
        return args.filter(
            (arg): arg is string => arg !== null && arg !== undefined,
        );
    }
}
