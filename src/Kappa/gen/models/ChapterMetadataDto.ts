/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenreTagDto } from './GenreTagDto';
import type { PersonDto } from './PersonDto';
import type { TagDto } from './TagDto';
/**
 * Exclusively metadata about a given chapter
 */
export type ChapterMetadataDto = {
    id?: number;
    chapterId?: number;
    title?: string | null;
    writers?: Array<PersonDto> | null;
    coverArtists?: Array<PersonDto> | null;
    publishers?: Array<PersonDto> | null;
    characters?: Array<PersonDto> | null;
    pencillers?: Array<PersonDto> | null;
    inkers?: Array<PersonDto> | null;
    imprints?: Array<PersonDto> | null;
    colorists?: Array<PersonDto> | null;
    letterers?: Array<PersonDto> | null;
    editors?: Array<PersonDto> | null;
    translators?: Array<PersonDto> | null;
    teams?: Array<PersonDto> | null;
    locations?: Array<PersonDto> | null;
    genres?: Array<GenreTagDto> | null;
    /**
     * Collection of all Tags from underlying chapters for a Series
     */
    tags?: Array<TagDto> | null;
    /**
     * Represents Age Rating for content.
     */
    ageRating?: ChapterMetadataDto.ageRating;
    releaseDate?: string | null;
    publicationStatus?: ChapterMetadataDto.publicationStatus;
    /**
     * Summary for the Chapter/Issue
     */
    summary?: string | null;
    /**
     * Language for the Chapter/Issue
     */
    language?: string | null;
    /**
     * Number in the TotalCount of issues
     */
    count?: number;
    /**
     * Total number of issues for the series
     */
    totalCount?: number;
    /**
     * Number of Words for this chapter. Only applies to Epub
     */
    wordCount?: number;
};
export namespace ChapterMetadataDto {
    /**
     * Represents Age Rating for content.
     */
    export enum ageRating {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
        '_14' = 14,
        '_-1' = -1,
    }
    export enum publicationStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

