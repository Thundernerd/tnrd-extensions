/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDimensionDto } from "./FileDimensionDto";

/**
 * Information about the Chapter for the Reader to render
 */
export type ChapterInfoDto = {
    /**
     * The Chapter Number
     */
    chapterNumber?: string | null;
    /**
     * The Volume Number
     */
    volumeNumber?: string | null;
    /**
     * Volume entity Id
     */
    volumeId?: number;
    /**
     * Series Name
     */
    seriesName?: string | null;
    /**
     * Series Format
     */
    seriesFormat?: ChapterInfoDto.seriesFormat;
    /**
     * Series entity Id
     */
    seriesId?: number;
    /**
     * Library entity Id
     */
    libraryId?: number;
    /**
     * Library type
     */
    libraryType?: ChapterInfoDto.libraryType;
    /**
     * Chapter's title if set via ComicInfo.xml (Title field)
     */
    chapterTitle?: string | null;
    /**
     * Total Number of pages in this Chapter
     */
    pages?: number;
    /**
     * File name of the chapter
     */
    fileName?: string | null;
    /**
     * If this is marked as a special in Kavita
     */
    isSpecial?: boolean;
    /**
     * The subtitle to render on the reader
     */
    subtitle?: string | null;
    /**
     * Series Title
     */
    title?: string | null;
    /**
     * Total pages for the series
     */
    seriesTotalPages?: number;
    /**
     * Total pages read for the series
     */
    seriesTotalPagesRead?: number;
    /**
     * List of all files with their inner archive structure maintained in filename and dimensions
     */
    pageDimensions?: Array<FileDimensionDto> | null;
    /**
     * For Double Page reader, this will contain snap points to ensure the reader always resumes on correct page
     */
    doublePairs?: Record<string, number> | null;
};
export namespace ChapterInfoDto {
    /**
     * Series Format
     */
    export enum seriesFormat {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
    /**
     * Library type
     */
    export enum libraryType {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
    }
}
