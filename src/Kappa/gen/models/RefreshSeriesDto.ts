/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Used for running some task against a Series.
 */
export type RefreshSeriesDto = {
    /**
     * Library Id series belongs to
     */
    libraryId?: number;
    /**
     * Series Id
     */
    seriesId?: number;
    /**
     * Should the task force opening/re-calculation.
     */
    forceUpdate?: boolean;
    /**
     * Should the task force re-calculation of colorscape.
     */
    forceColorscape?: boolean;
};

