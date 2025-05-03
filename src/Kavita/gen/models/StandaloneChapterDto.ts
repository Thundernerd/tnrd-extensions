/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenreTagDto } from './GenreTagDto';
import type { MangaFileDto } from './MangaFileDto';
import type { PersonDto } from './PersonDto';
import type { TagDto } from './TagDto';
/**
 * Used on Person Profile page
 */
export type StandaloneChapterDto = {
    id?: number;
    /**
     * Range of chapters. Chapter 2-4 -> "2-4". Chapter 2 -> "2". If special, will be special name.
     */
    range?: string | null;
    /**
     * Smallest number of the Range.
     * @deprecated
     */
    number?: string | null;
    /**
     * This may be 0 under the circumstance that the Issue is "Alpha" or other non-standard numbers.
     */
    minNumber?: number;
    maxNumber?: number;
    /**
     * The sorting order of the Chapter. Inherits from MinNumber, but can be overridden.
     */
    sortOrder?: number;
    /**
     * Total number of pages in all MangaFiles
     */
    pages?: number;
    /**
     * If this Chapter contains files that could only be identified as Series or has Special Identifier from filename
     */
    isSpecial?: boolean;
    /**
     * Used for books/specials to display custom title. For non-specials/books, will be set to API.DTOs.ChapterDto.Range
     */
    title?: string | null;
    /**
     * The files that represent this Chapter
     */
    files?: Array<MangaFileDto> | null;
    /**
     * Calculated at API time. Number of pages read for this Chapter for logged in user.
     */
    pagesRead?: number;
    /**
     * The last time a chapter was read by current authenticated user
     */
    lastReadingProgressUtc?: string;
    /**
     * The last time a chapter was read by current authenticated user
     */
    lastReadingProgress?: string;
    /**
     * If the Cover Image is locked for this entity
     */
    coverImageLocked?: boolean;
    /**
     * Volume Id this Chapter belongs to
     */
    volumeId?: number;
    /**
     * When chapter was created
     */
    createdUtc?: string;
    lastModifiedUtc?: string;
    /**
     * When chapter was created in local server time
     */
    created?: string;
    /**
     * When the chapter was released.
     */
    releaseDate?: string;
    /**
     * Title of the Chapter/Issue
     */
    titleName?: string | null;
    /**
     * Summary of the Chapter
     */
    summary?: string | null;
    /**
     * Age Rating for the issue/chapter
     */
    ageRating?: StandaloneChapterDto.ageRating;
    /**
     * Total words in a Chapter (books only)
     */
    wordCount?: number;
    minHoursToRead?: number;
    maxHoursToRead?: number;
    avgHoursToRead?: number;
    /**
     * Comma-separated link of urls to external services that have some relation to the Chapter
     */
    webLinks?: string | null;
    /**
     * ISBN-13 (usually) of the Chapter
     */
    isbn?: string | null;
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
    publicationStatus?: StandaloneChapterDto.publicationStatus;
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
    languageLocked?: boolean;
    summaryLocked?: boolean;
    /**
     * Locked by user so metadata updates from scan loop will not override AgeRating
     */
    ageRatingLocked?: boolean;
    /**
     * Locked by user so metadata updates from scan loop will not override PublicationStatus
     */
    publicationStatusLocked?: boolean;
    genresLocked?: boolean;
    tagsLocked?: boolean;
    writerLocked?: boolean;
    characterLocked?: boolean;
    coloristLocked?: boolean;
    editorLocked?: boolean;
    inkerLocked?: boolean;
    imprintLocked?: boolean;
    lettererLocked?: boolean;
    pencillerLocked?: boolean;
    publisherLocked?: boolean;
    translatorLocked?: boolean;
    teamLocked?: boolean;
    locationLocked?: boolean;
    coverArtistLocked?: boolean;
    releaseYearLocked?: boolean;
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    seriesId?: number;
    libraryId?: number;
    libraryType?: StandaloneChapterDto.libraryType;
    volumeTitle?: string | null;
};
export namespace StandaloneChapterDto {
    /**
     * Age Rating for the issue/chapter
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
    export enum libraryType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
}

