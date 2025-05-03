/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenreTagDto } from './GenreTagDto';
import type { PersonDto } from './PersonDto';
import type { TagDto } from './TagDto';
export type UpdateChapterDto = {
    id?: number;
    summary?: string | null;
    /**
     * Genres for the Chapter
     */
    genres?: Array<GenreTagDto> | null;
    /**
     * Collection of all Tags from underlying chapters for a Chapter
     */
    tags?: Array<TagDto> | null;
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
    /**
     * Highest Age Rating from all Chapters
     */
    ageRating?: UpdateChapterDto.ageRating;
    /**
     * Language of the content (BCP-47 code)
     */
    language?: string | null;
    /**
     * Locked by user so metadata updates from scan loop will not override AgeRating
     */
    ageRatingLocked?: boolean;
    titleNameLocked?: boolean;
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
    languageLocked?: boolean;
    summaryLocked?: boolean;
    isbnLocked?: boolean;
    releaseDateLocked?: boolean;
    /**
     * The sorting order of the Chapter. Inherits from MinNumber, but can be overridden.
     */
    sortOrder?: number;
    /**
     * Can the sort order be updated on scan or is it locked from UI
     */
    sortOrderLocked?: boolean;
    /**
     * Comma-separated link of urls to external services that have some relation to the Chapter
     */
    webLinks?: string | null;
    isbn?: string | null;
    /**
     * Date which chapter was released
     */
    releaseDate?: string;
    /**
     * Chapter title
     */
    titleName?: string | null;
};
export namespace UpdateChapterDto {
    /**
     * Highest Age Rating from all Chapters
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
}

