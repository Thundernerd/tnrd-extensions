/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LibraryDto = {
    id?: number;
    name?: string | null;
    /**
     * Last time Library was scanned
     */
    lastScanned?: string;
    type?: LibraryDto.type;
    /**
     * An optional Cover Image or null
     */
    coverImage?: string | null;
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
     * Should this library create and manage collections from Metadata
     */
    manageCollections?: boolean;
    /**
     * Should this library create and manage reading lists from Metadata
     */
    manageReadingLists?: boolean;
    /**
     * Include library series in Search
     */
    includeInSearch?: boolean;
    /**
     * Should this library allow Scrobble events to emit from it
     */
    allowScrobbling?: boolean;
    folders?: Array<string> | null;
    /**
     * When showing series, only parent series or series with no relationships will be returned
     */
    collapseSeriesRelationships?: boolean;
    /**
     * The types of file type groups the library will scan for
     */
    libraryFileTypes?: Array<1 | 2 | 3 | 4> | null;
    /**
     * A set of globs that will exclude matching content from being scanned
     */
    excludePatterns?: Array<string> | null;
    /**
     * Allow any series within this Library to download metadata.
     */
    allowMetadataMatching?: boolean;
};
export namespace LibraryDto {
    export enum type {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
    }
}
