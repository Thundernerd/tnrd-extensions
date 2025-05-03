/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from './AppUser';
import type { Series } from './Series';
/**
 * Represents a Collection of Series for a given User
 */
export type AppUserCollection = {
    id?: number;
    title: string | null;
    /**
     * A normalized string used to check if the collection already exists in the DB
     */
    normalizedTitle: string | null;
    summary?: string | null;
    /**
     * Reading lists that are promoted are only done by admins
     */
    promoted?: boolean;
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    coverImageLocked?: boolean;
    /**
     * The highest age rating from all Series within the collection
     */
    ageRating: AppUserCollection.ageRating;
    items?: Array<Series> | null;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    /**
     * Last time Kavita Synced the Collection with an upstream source (for non Kavita sourced collections)
     */
    lastSyncUtc?: string;
    /**
     * Who created/manages the list. Non-Kavita lists are not editable by the user, except to promote
     */
    source?: AppUserCollection.source;
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
    appUser?: AppUser;
    appUserId?: number;
};
export namespace AppUserCollection {
    /**
     * The highest age rating from all Series within the collection
     */
    export enum ageRating {
        '_0' = 0,
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
        '_-1' = -1,
    }
    /**
     * Who created/manages the list. Non-Kavita lists are not editable by the user, except to promote
     */
    export enum source {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

