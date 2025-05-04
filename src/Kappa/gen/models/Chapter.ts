/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUserChapterRating } from "./AppUserChapterRating";
import type { AppUserProgress } from "./AppUserProgress";
import type { ChapterPeople } from "./ChapterPeople";
import type { ExternalRating } from "./ExternalRating";
import type { ExternalReview } from "./ExternalReview";
import type { Genre } from "./Genre";
import type { MangaFile } from "./MangaFile";
import type { Tag } from "./Tag";
import type { Volume } from "./Volume";

export type Chapter = {
    id?: number;
    /**
     * Range of numbers. Chapter 2-4 -> "2-4". Chapter 2 -> "2". If the chapter is a special, will return the Special Name
     */
    range: string | null;
    /**
     * Smallest number of the Range. Can be a partial like Chapter 4.5
     * @deprecated
     */
    number: string | null;
    /**
     * Minimum Chapter Number.
     */
    minNumber?: number;
    /**
     * Maximum Chapter Number
     */
    maxNumber?: number;
    /**
     * The sorting order of the Chapter. Inherits from MinNumber, but can be overridden.
     */
    sortOrder?: number;
    /**
     * Can the sort order be updated on scan or is it locked from UI
     */
    sortOrderLocked?: boolean;
    /**
     * The files that represent this Chapter
     */
    files?: Array<MangaFile> | null;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    coverImageLocked?: boolean;
    /**
     * Total number of pages in all MangaFiles
     */
    pages?: number;
    /**
     * If this Chapter contains files that could only be identified as Series or has Special Identifier from filename
     */
    isSpecial?: boolean;
    /**
     * Used for books/specials to display custom title. For non-specials/books, will be set to API.Entities.Chapter.Range
     */
    title?: string | null;
    /**
     * Age Rating for the issue/chapter
     */
    ageRating?: Chapter.ageRating;
    /**
     * Chapter title
     */
    titleName?: string | null;
    /**
     * Date which chapter was released
     */
    releaseDate?: string;
    /**
     * Summary for the Chapter/Issue
     */
    summary?: string | null;
    /**
     * Language for the Chapter/Issue
     */
    language?: string | null;
    /**
     * Total number of issues or volumes in the series. This is straight from ComicInfo
     */
    totalCount?: number;
    /**
     * Number of the Total Count (progress the Series is complete)
     */
    count?: number;
    /**
     * SeriesGroup tag in ComicInfo
     */
    seriesGroup?: string | null;
    storyArc?: string | null;
    storyArcNumber?: string | null;
    alternateNumber?: string | null;
    alternateSeries?: string | null;
    /**
     * Not currently used in Kavita
     */
    alternateCount?: number;
    /**
     * Total Word count of all chapters in this chapter.
     */
    wordCount?: number;
    minHoursToRead?: number;
    maxHoursToRead?: number;
    avgHoursToRead?: number;
    /**
     * Comma-separated link of urls to external services that have some relation to the Chapter
     */
    webLinks?: string | null;
    isbn?: string | null;
    /**
     * (Kavita+) Average rating from Kavita+ metadata
     */
    averageExternalRating?: number;
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
     * All people attached at a Chapter level. Usually Comics will have different people per issue.
     */
    people?: Array<ChapterPeople> | null;
    /**
     * Genres for the Chapter
     */
    genres?: Array<Genre> | null;
    tags?: Array<Tag> | null;
    ratings?: Array<AppUserChapterRating> | null;
    userProgress?: Array<AppUserProgress> | null;
    volume?: Volume;
    volumeId?: number;
    externalReviews?: Array<ExternalReview> | null;
    externalRatings?: Array<ExternalRating> | null;
};
export namespace Chapter {
    /**
     * Age Rating for the issue/chapter
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
}
