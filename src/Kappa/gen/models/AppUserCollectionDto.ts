/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AppUserCollectionDto = {
    id?: number;
    title?: string | null;
    summary?: string | null;
    promoted?: boolean;
    /**
     * Represents Age Rating for content.
     */
    ageRating?: AppUserCollectionDto.ageRating;
    /**
     * This is used to tell the UI if it should request a Cover Image or not. If null or empty, it has not been set.
     */
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    coverImageLocked?: boolean;
    /**
     * Number of Series in the Collection
     */
    itemCount?: number;
    /**
     * Owner of the Collection
     */
    owner?: string | null;
    /**
     * Last time Kavita Synced the Collection with an upstream source (for non Kavita sourced collections)
     */
    lastSyncUtc?: string;
    /**
     * Who created/manages the list. Non-Kavita lists are not editable by the user, except to promote
     */
    source?: AppUserCollectionDto.source;
    /**
     * For Non-Kavita sourced collections, the url to sync from
     */
    sourceUrl?: string | null;
    /**
     * Total number of items as of the last sync. Not applicable for Kavita managed collections.
     */
    totalSourceCount?: number;
    /**
     * A
     * separated string of all missing series
     */
    missingSeriesFromSource?: string | null;
};
export namespace AppUserCollectionDto {
    /**
     * Represents Age Rating for content.
     */
    export enum ageRating {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
        "_6" = 6,
        "_7" = 7,
        "_8" = 8,
        "_9" = 9,
        "_10" = 10,
        "_11" = 11,
        "_12" = 12,
        "_13" = 13,
        "_14" = 14,
        "_-1" = -1,
    }
    /**
     * Who created/manages the list. Non-Kavita lists are not editable by the user, except to promote
     */
    export enum source {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
