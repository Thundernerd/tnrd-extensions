/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from "./AppUser";

/**
 * Represents the progress a single user has on a given Chapter.
 */
export type AppUserProgress = {
    /**
     * Id of Entity
     */
    id?: number;
    /**
     * Pages Read for given Chapter
     */
    pagesRead?: number;
    /**
     * Volume belonging to Chapter
     */
    volumeId?: number;
    /**
     * Series belonging to Chapter
     */
    seriesId?: number;
    /**
     * Library belonging to Chapter
     */
    libraryId?: number;
    /**
     * Chapter
     */
    chapterId?: number;
    /**
     * For Book Reader, represents the nearest passed anchor on the screen that can be used to resume scroll point
     * on next load
     */
    bookScrollId?: string | null;
    /**
     * When this was first created
     */
    created?: string;
    /**
     * Last date this was updated
     */
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    appUser?: AppUser;
    /**
     * User this progress belongs to
     */
    appUserId?: number;
};
