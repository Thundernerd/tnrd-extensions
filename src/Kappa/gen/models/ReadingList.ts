/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from "./AppUser";
import type { ReadingListItem } from "./ReadingListItem";

/**
 * This is a collection of API.Entities.ReadingListItem which represent individual chapters and an order.
 */
export type ReadingList = {
    id?: number;
    title: string | null;
    /**
     * A normalized string used to check if the reading list already exists in the DB
     */
    normalizedTitle: string | null;
    summary?: string | null;
    /**
     * Reading lists that are promoted are only done by admins
     */
    promoted?: boolean;
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    coverImageLocked?: boolean;
    /**
     * The highest age rating from all Series within the reading list
     */
    ageRating: ReadingList.ageRating;
    items?: Array<ReadingListItem> | null;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
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
    appUserId?: number;
    appUser?: AppUser;
};
export namespace ReadingList {
    /**
     * The highest age rating from all Series within the reading list
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
