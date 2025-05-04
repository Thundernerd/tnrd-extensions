/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

/**
 * Represents a single User's reading event
 */
export type ReadHistoryEvent = {
    userId?: number;
    userName: string | null;
    libraryId?: number;
    seriesId?: number;
    seriesName: string | null;
    readDate?: string;
    readDateUtc?: string;
    chapterId?: number;
    chapterNumber: number;
};
