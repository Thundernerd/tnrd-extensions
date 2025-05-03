/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from './AppUser';
import type { FolderPath } from './FolderPath';
import type { LibraryExcludePattern } from './LibraryExcludePattern';
import type { LibraryFileTypeGroup } from './LibraryFileTypeGroup';
import type { Series } from './Series';
export type Library = {
    id?: number;
    name: string | null;
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    type?: Library.type;
    /**
     * If Folder Watching is enabled for this library
     */
    folderWatching?: boolean;
    /**
     * Include Library series on Dashboard Streams
     */
    includeInDashboard?: boolean;
    /**
     * Include Library series on Recommended Streams
     */
    includeInRecommended?: boolean;
    /**
     * Include library series in Search
     */
    includeInSearch?: boolean;
    /**
     * Should this library create collections from Metadata
     */
    manageCollections?: boolean;
    /**
     * Should this library create reading lists from Metadata
     */
    manageReadingLists?: boolean;
    /**
     * Should this library allow Scrobble events to emit from it
     */
    allowScrobbling?: boolean;
    /**
     * Allow any series within this Library to download metadata.
     */
    allowMetadataMatching?: boolean;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    /**
     * Last time Library was scanned
     */
    lastScanned?: string;
    folders?: Array<FolderPath> | null;
    appUsers?: Array<AppUser> | null;
    series?: Array<Series> | null;
    libraryFileTypes?: Array<LibraryFileTypeGroup> | null;
    libraryExcludePatterns?: Array<LibraryExcludePattern> | null;
};
export namespace Library {
    export enum type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
}

