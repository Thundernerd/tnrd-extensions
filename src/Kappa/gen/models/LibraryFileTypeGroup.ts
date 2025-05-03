/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Library } from './Library';
export type LibraryFileTypeGroup = {
    id?: number;
    /**
     * Represents a set of file types that can be scanned
     */
    fileTypeGroup?: LibraryFileTypeGroup.fileTypeGroup;
    libraryId?: number;
    library?: Library;
};
export namespace LibraryFileTypeGroup {
    /**
     * Represents a set of file types that can be scanned
     */
    export enum fileTypeGroup {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

