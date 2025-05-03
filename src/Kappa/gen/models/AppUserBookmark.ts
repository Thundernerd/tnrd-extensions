/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a saved page in a Chapter entity for a given user.
 */
export type AppUserBookmark = {
    id?: number;
    page?: number;
    seriesId?: number;
    volumeId?: number;
    chapterId?: number;
    /**
     * Filename in the Bookmark Directory
     */
    fileName?: string | null;
    appUserId?: number;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
};

