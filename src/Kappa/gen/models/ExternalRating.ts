/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalSeriesMetadata } from './ExternalSeriesMetadata';
export type ExternalRating = {
    id?: number;
    averageScore?: number;
    favoriteCount?: number;
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    provider?: ExternalRating.provider;
    authority?: ExternalRating.authority;
    providerUrl?: string | null;
    seriesId?: number;
    /**
     * This can be null when for a series-rating
     */
    chapterId?: number | null;
    externalSeriesMetadatas?: Array<ExternalSeriesMetadata> | null;
};
export namespace ExternalRating {
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    export enum provider {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
    export enum authority {
        '_0' = 0,
        '_1' = 1,
    }
}

