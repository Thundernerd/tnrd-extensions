/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDimensionDto } from "./FileDimensionDto";

export type BookmarkInfoDto = {
    seriesName?: string | null;
    /**
     * Represents the format of the file
     */
    seriesFormat?: BookmarkInfoDto.seriesFormat;
    seriesId?: number;
    libraryId?: number;
    libraryType?: BookmarkInfoDto.libraryType;
    pages?: number;
    /**
     * List of all files with their inner archive structure maintained in filename and dimensions
     */
    pageDimensions?: Array<FileDimensionDto> | null;
    /**
     * For Double Page reader, this will contain snap points to ensure the reader always resumes on correct page
     */
    doublePairs?: Record<string, number> | null;
};
export namespace BookmarkInfoDto {
    /**
     * Represents the format of the file
     */
    export enum seriesFormat {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
    export enum libraryType {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
    }
}
