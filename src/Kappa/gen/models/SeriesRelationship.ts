/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ALMediaTitle } from './ALMediaTitle';
export type SeriesRelationship = {
    aniListId?: number;
    malId?: number | null;
    seriesName?: ALMediaTitle;
    /**
     * Represents a relationship between Series
     */
    relation?: SeriesRelationship.relation;
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    provider?: SeriesRelationship.provider;
    /**
     * Represents PlusMediaFormat
     */
    plusMediaFormat?: SeriesRelationship.plusMediaFormat;
};
export namespace SeriesRelationship {
    /**
     * Represents a relationship between Series
     */
    export enum relation {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
        '_14' = 14,
    }
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
    /**
     * Represents PlusMediaFormat
     */
    export enum plusMediaFormat {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
}

