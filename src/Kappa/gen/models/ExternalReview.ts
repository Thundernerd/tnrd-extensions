/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalSeriesMetadata } from "./ExternalSeriesMetadata";

/**
 * Represents an Externally supplied Review for a given Series
 */
export type ExternalReview = {
    id?: number;
    tagline?: string | null;
    body: string | null;
    /**
     * Pure text version of the body
     */
    bodyJustText: string | null;
    /**
     * Raw from the provider. Usually Markdown
     */
    rawBody?: string | null;
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    provider: ExternalReview.provider;
    authority?: ExternalReview.authority;
    siteUrl?: string | null;
    /**
     * Reviewer's username
     */
    username?: string | null;
    /**
     * An Optional Rating coming from the Review
     */
    rating?: number;
    /**
     * The media's overall Score
     */
    score?: number;
    totalVotes?: number;
    seriesId?: number;
    chapterId?: number | null;
    externalSeriesMetadatas?: Array<ExternalSeriesMetadata> | null;
};
export namespace ExternalReview {
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
    export enum authority {
        "_0" = 0,
        "_1" = 1,
    }
}
