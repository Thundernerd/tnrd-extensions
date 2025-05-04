/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalRating } from "./ExternalRating";
import type { ExternalRecommendation } from "./ExternalRecommendation";
import type { ExternalReview } from "./ExternalReview";
import type { Series } from "./Series";

/**
 * External Metadata from Kavita+ for a Series
 */
export type ExternalSeriesMetadata = {
    id?: number;
    /**
     * External Reviews for the Series. Managed by Kavita for Kavita+ users
     */
    externalReviews?: Array<ExternalReview> | null;
    externalRatings?: Array<ExternalRating> | null;
    /**
     * External recommendations will include all recommendations and will have a seriesId if it's on this Kavita instance.
     */
    externalRecommendations?: Array<ExternalRecommendation> | null;
    /**
     * Average External Rating. -1 means not set, 0 - 100
     */
    averageExternalRating?: number;
    aniListId?: number;
    cbrId?: number;
    malId?: number;
    googleBooksId?: string | null;
    /**
     * Data is valid until this time
     */
    validUntilUtc?: string;
    series?: Series;
    seriesId?: number;
};
