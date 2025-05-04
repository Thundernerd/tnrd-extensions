/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BookChapterItem = {
    /**
     * Name of the Chapter
     */
    title?: string | null;
    /**
     * A part represents the id of the anchor so we can scroll to it. 01_values.xhtml#h_sVZPaxUSy/
     */
    part?: string | null;
    /**
     * Page Number to load for the chapter
     */
    page?: number;
    children?: Array<BookChapterItem> | null;
};
