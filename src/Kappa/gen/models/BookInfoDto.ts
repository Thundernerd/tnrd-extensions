/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookInfoDto = {
    bookTitle?: string | null;
    seriesId?: number;
    volumeId?: number;
    /**
     * Represents the format of the file
     */
    seriesFormat?: BookInfoDto.seriesFormat;
    seriesName?: string | null;
    chapterNumber?: string | null;
    volumeNumber?: string | null;
    libraryId?: number;
    pages?: number;
    isSpecial?: boolean;
    chapterTitle?: string | null;
};
export namespace BookInfoDto {
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
}
