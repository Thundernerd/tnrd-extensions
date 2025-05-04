/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
/**
 * A full progress Record from the DB (not all data, only what's needed for API)
 */
export type FullProgressDto = {
    id?: number;
    chapterId?: number;
    pagesRead?: number;
    lastModified?: string;
    lastModifiedUtc?: string;
    created?: string;
    createdUtc?: string;
    appUserId?: number;
    userName?: string | null;
};
