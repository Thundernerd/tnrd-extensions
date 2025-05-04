/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AppUser } from "./AppUser";
import type { Series } from "./Series";

export type AppUserRating = {
    id?: number;
    /**
     * A number between 0-5.0 that represents how good a series is.
     */
    rating?: number;
    /**
     * If the rating has been explicitly set. Otherwise, the 0.0 rating should be ignored as it's not rated
     */
    hasBeenRated?: boolean;
    /**
     * A short summary the user can write when giving their review.
     */
    review?: string | null;
    /**
     * An optional tagline for the review
     * @deprecated
     */
    tagline?: string | null;
    seriesId?: number;
    series?: Series;
    appUserId?: number;
    appUser?: AppUser;
};
