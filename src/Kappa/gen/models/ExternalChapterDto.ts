/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { UserReviewDto } from "./UserReviewDto";

/**
 * Information about an individual issue/chapter/book from Kavita+
 */
export type ExternalChapterDto = {
    title?: string | null;
    issueNumber?: string | null;
    criticRating?: number | null;
    userRating?: number | null;
    summary?: string | null;
    writers?: Array<string> | null;
    artists?: Array<string> | null;
    releaseDate?: string | null;
    publisher?: string | null;
    coverImageUrl?: string | null;
    issueUrl?: string | null;
    criticReviews?: Array<UserReviewDto> | null;
    userReviews?: Array<UserReviewDto> | null;
};
