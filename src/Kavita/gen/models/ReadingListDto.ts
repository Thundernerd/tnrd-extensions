/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReadingListDto = {
    id?: number;
    title?: string | null;
    summary?: string | null;
    /**
     * Reading lists that are promoted are only done by admins
     */
    promoted?: boolean;
    coverImageLocked?: boolean;
    /**
     * This is used to tell the UI if it should request a Cover Image or not. If null or empty, it has not been set.
     */
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    /**
     * Number of Items in the Reading List
     */
    itemCount?: number;
    /**
     * Minimum Year the Reading List starts
     */
    startingYear?: number;
    /**
     * Minimum Month the Reading List starts
     */
    startingMonth?: number;
    /**
     * Maximum Year the Reading List starts
     */
    endingYear?: number;
    /**
     * Maximum Month the Reading List starts
     */
    endingMonth?: number;
    /**
     * The highest age rating from all Series within the reading list
     */
    ageRating: ReadingListDto.ageRating;
};
export namespace ReadingListDto {
    /**
     * The highest age rating from all Series within the reading list
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

