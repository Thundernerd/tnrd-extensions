/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chapter } from "./Chapter";

/**
 * Represents a wrapper to the underlying file. This provides information around file, like number of pages, format, etc.
 */
export type MangaFile = {
    id?: number;
    /**
     * The filename without extension
     */
    fileName?: string | null;
    /**
     * Absolute path to the archive file
     */
    filePath: string | null;
    /**
     * Number of pages for the given file
     */
    pages?: number;
    /**
     * Represents the format of the file
     */
    format?: MangaFile.format;
    /**
     * How many bytes make up this file
     */
    bytes?: number;
    /**
     * File extension
     */
    extension?: string | null;
    created?: string;
    /**
     * Last time underlying file was modified
     */
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    /**
     * Last time file analysis ran on this file
     */
    lastFileAnalysis?: string;
    lastFileAnalysisUtc?: string;
    chapter?: Chapter;
    chapterId?: number;
};
export namespace MangaFile {
    /**
     * Represents the format of the file
     */
    export enum format {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
