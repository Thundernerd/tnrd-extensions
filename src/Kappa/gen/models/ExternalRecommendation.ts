/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalSeriesMetadata } from './ExternalSeriesMetadata';
export type ExternalRecommendation = {
    id?: number;
    name: string | null;
    coverUrl: string | null;
    url: string | null;
    summary?: string | null;
    aniListId?: number | null;
    malId?: number | null;
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    provider?: ExternalRecommendation.provider;
    /**
     * When null, represents an external series. When set, it is a Series
     */
    seriesId?: number | null;
    externalSeriesMetadatas?: Array<ExternalSeriesMetadata> | null;
};
export namespace ExternalRecommendation {
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
}

