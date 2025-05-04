/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ScrobbleEventFilter = {
    /**
     * Which field to sort on
     */
    field?: ScrobbleEventFilter.field;
    /**
     * If the sort should be a descending sort
     */
    isDescending?: boolean;
    /**
     * A query to search against
     */
    query?: string | null;
    /**
     * Include reviews in the result - Note: Review Scrobbling is disabled
     */
    includeReviews?: boolean;
};
export namespace ScrobbleEventFilter {
    /**
     * Which field to sort on
     */
    export enum field {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
        "_6" = 6,
    }
}
