/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateLibraryDto = {
    id: number;
    name: string;
    type: UpdateLibraryDto.type;
    folders: Array<string>;
    folderWatching: boolean;
    includeInDashboard: boolean;
    includeInSearch: boolean;
    manageCollections: boolean;
    manageReadingLists: boolean;
    allowScrobbling: boolean;
    allowMetadataMatching: boolean;
    /**
     * What types of files to allow the scanner to pickup
     */
    fileGroupTypes: Array<1 | 2 | 3 | 4>;
    /**
     * A set of Glob patterns that the scanner will exclude processing
     */
    excludePatterns: Array<string>;
};
export namespace UpdateLibraryDto {
    export enum type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
}

