/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Used for matching a series with Kavita+ for metadata and scrobbling
 */
export type MatchSeriesDto = {
    /**
     * When set, Kavita will stop attempting to match this series and will not perform any scrobbling
     */
    dontMatch?: boolean;
    /**
     * Series Id to pull internal metadata from to improve matching
     */
    seriesId?: number;
    /**
     * Free form text to query for. Can be a url and ids will be parsed from it
     */
    query?: string | null;
};
