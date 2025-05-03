/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A mesh of data for Recently added volume/chapters
 */
export type RecentlyAddedItemDto = {
    seriesName?: string | null;
    seriesId?: number;
    libraryId?: number;
    libraryType?: RecentlyAddedItemDto.libraryType;
    /**
     * This will automatically map to Volume X, Chapter Y, etc.
     */
    title?: string | null;
    created?: string;
    /**
     * Chapter Id if this is a chapter. Not guaranteed to be set.
     */
    chapterId?: number;
    /**
     * Volume Id if this is a chapter. Not guaranteed to be set.
     */
    volumeId?: number;
    /**
     * This is used only on the UI. It is just index of being added.
     */
    id?: number;
    /**
     * Represents the format of the file
     */
    format?: RecentlyAddedItemDto.format;
};
export namespace RecentlyAddedItemDto {
    export enum libraryType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
    /**
     * Represents the format of the file
     */
    export enum format {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

