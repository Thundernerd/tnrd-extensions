/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a User Review for a given Series
 */
export type UserReviewDto = {
    /**
     * A tagline for the review
     */
    tagline?: string | null;
    /**
     * The main review
     */
    body?: string | null;
    /**
     * The main body with just text, for review preview
     */
    bodyJustText?: string | null;
    /**
     * The series this is for
     */
    seriesId?: number;
    chapterId?: number | null;
    /**
     * The library this series belongs in
     */
    libraryId?: number;
    /**
     * The user who wrote this
     */
    username?: string | null;
    totalVotes?: number;
    rating?: number;
    rawBody?: string | null;
    /**
     * How many upvotes this review has gotten
     */
    score?: number;
    /**
     * If External, the url of the review
     */
    siteUrl?: string | null;
    /**
     * Does this review come from an external Source
     */
    isExternal?: boolean;
    /**
     * If this review is External, which Provider did it come from
     */
    provider?: UserReviewDto.provider;
    /**
     * Source of the Rating
     */
    authority?: UserReviewDto.authority;
};
export namespace UserReviewDto {
    /**
     * If this review is External, which Provider did it come from
     */
    export enum provider {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
    /**
     * Source of the Rating
     */
    export enum authority {
        '_0' = 0,
        '_1' = 1,
    }
}

