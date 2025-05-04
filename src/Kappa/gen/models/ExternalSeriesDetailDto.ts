/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalChapterDto } from "./ExternalChapterDto";
import type { MetadataTagDto } from "./MetadataTagDto";
import type { SeriesCharacter } from "./SeriesCharacter";
import type { SeriesRelationship } from "./SeriesRelationship";
import type { SeriesStaffDto } from "./SeriesStaffDto";

/**
 * This is AniListSeries
 */
export type ExternalSeriesDetailDto = {
    name?: string | null;
    aniListId?: number | null;
    malId?: number | null;
    cbrId?: number | null;
    synonyms?: Array<string> | null;
    /**
     * Represents PlusMediaFormat
     */
    plusMediaFormat?: ExternalSeriesDetailDto.plusMediaFormat;
    siteUrl?: string | null;
    coverUrl?: string | null;
    genres?: Array<string> | null;
    staff?: Array<SeriesStaffDto> | null;
    tags?: Array<MetadataTagDto> | null;
    summary?: string | null;
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    provider?: ExternalSeriesDetailDto.provider;
    startDate?: string | null;
    endDate?: string | null;
    averageScore?: number;
    chapters?: number;
    volumes?: number;
    relations?: Array<SeriesRelationship> | null;
    characters?: Array<SeriesCharacter> | null;
    publisher?: string | null;
    /**
     * Only from CBR for API.Services.Plus.ScrobbleProvider.Cbr. Full metadata about issues
     */
    chapterDtos?: Array<ExternalChapterDto> | null;
};
export namespace ExternalSeriesDetailDto {
    /**
     * Represents PlusMediaFormat
     */
    export enum plusMediaFormat {
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
    }
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    export enum provider {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
