/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MangaFileDto = {
    id?: number;
    /**
     * Absolute path to the archive file (normalized)
     */
    filePath?: string | null;
    /**
     * Number of pages for the given file
     */
    pages?: number;
    /**
     * How many bytes make up this file
     */
    bytes?: number;
    /**
     * Represents the format of the file
     */
    format?: MangaFileDto.format;
    created?: string;
    /**
     * File extension
     */
    extension?: string | null;
};
export namespace MangaFileDto {
    /**
     * Represents the format of the file
     */
    export enum format {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

