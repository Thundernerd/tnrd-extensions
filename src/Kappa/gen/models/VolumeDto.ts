/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { ChapterDto } from "./ChapterDto";

export type VolumeDto = {
    id?: number;
    minNumber?: number;
    maxNumber?: number;
    name?: string | null;
    /**
     * This will map to MinNumber. Number was removed in v0.7.13.8/v0.7.14
     * @deprecated
     */
    number?: number;
    pages?: number;
    pagesRead?: number;
    lastModifiedUtc?: string;
    createdUtc?: string;
    /**
     * When chapter was created in local server time
     */
    created?: string;
    /**
     * When chapter was last modified in local server time
     */
    lastModified?: string;
    seriesId?: number;
    chapters?: Array<ChapterDto> | null;
    minHoursToRead?: number;
    maxHoursToRead?: number;
    avgHoursToRead?: number;
    wordCount?: number;
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
};
