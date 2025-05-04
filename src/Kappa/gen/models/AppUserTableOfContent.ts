/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from "./AppUser";
import type { Chapter } from "./Chapter";
import type { Series } from "./Series";

/**
 * A personal table of contents for a given user linked with a given book
 */
export type AppUserTableOfContent = {
    id?: number;
    /**
     * The page to bookmark
     */
    pageNumber: number;
    /**
     * The title of the bookmark. Defaults to Page {PageNumber} if not set
     */
    title: string | null;
    seriesId: number;
    series?: Series;
    chapterId: number;
    chapter?: Chapter;
    volumeId?: number;
    libraryId?: number;
    /**
     * For Book Reader, represents the nearest passed anchor on the screen that can be used to resume scroll point. If empty, the ToC point is the beginning of the page
     */
    bookScrollId?: string | null;
    created?: string;
    createdUtc?: string;
    lastModified?: string;
    lastModifiedUtc?: string;
    appUser?: AppUser;
    /**
     * User this table of content belongs to
     */
    appUserId?: number;
};
