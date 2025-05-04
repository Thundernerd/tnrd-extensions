/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReadingListItemDto = {
    id?: number;
    order?: number;
    chapterId?: number;
    seriesId?: number;
    seriesName?: string | null;
    /**
     * Represents the format of the file
     */
    seriesFormat?: ReadingListItemDto.seriesFormat;
    pagesRead?: number;
    pagesTotal?: number;
    chapterNumber?: string | null;
    volumeNumber?: string | null;
    chapterTitleName?: string | null;
    volumeId?: number;
    libraryId?: number;
    title?: string | null;
    libraryType?: ReadingListItemDto.libraryType;
    libraryName?: string | null;
    /**
     * Release Date from Chapter
     */
    releaseDate?: string | null;
    /**
     * Used internally only
     */
    readingListId?: number;
    /**
     * The last time a reading list item (underlying chapter) was read by current authenticated user
     */
    lastReadingProgressUtc?: string | null;
    /**
     * File size of underlying item
     */
    fileSize?: number;
    /**
     * The chapter summary
     */
    summary?: string | null;
    isSpecial?: boolean;
};
export namespace ReadingListItemDto {
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
