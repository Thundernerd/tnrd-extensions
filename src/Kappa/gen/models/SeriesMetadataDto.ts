/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenreTagDto } from "./GenreTagDto";
import type { PersonDto } from "./PersonDto";
import type { TagDto } from "./TagDto";

export type SeriesMetadataDto = {
    id?: number;
    summary?: string | null;
    /**
     * Genres for the Series
     */
    genres?: Array<GenreTagDto> | null;
    /**
     * Collection of all Tags from underlying chapters for a Series
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
    ageRating?: SeriesMetadataDto.ageRating;
    /**
     * Earliest Year from all chapters
     */
    releaseYear?: number;
    /**
     * Language of the content (BCP-47 code)
     */
    language?: string | null;
    /**
     * Max number of issues/volumes in the series (Max of Volume/Issue field in ComicInfo)
     */
    maxCount?: number;
    /**
     * Total number of issues/volumes for the series
     */
    totalCount?: number;
    /**
     * Publication status of the Series
     */
    publicationStatus?: SeriesMetadataDto.publicationStatus;
    /**
     * A comma-separated list of Urls
     */
    webLinks?: string | null;
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
    seriesId?: number;
};
export namespace SeriesMetadataDto {
    /**
     * Highest Age Rating from all Chapters
     */
    export enum ageRating {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
        "_6" = 6,
        "_7" = 7,
        "_8" = 8,
        "_9" = 9,
        "_10" = 10,
        "_11" = 11,
        "_12" = 12,
        "_13" = 13,
        "_14" = 14,
        "_-1" = -1,
    }
    /**
     * Publication status of the Series
     */
    export enum publicationStatus {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
