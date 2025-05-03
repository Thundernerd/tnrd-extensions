/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProgressDto = {
    volumeId: number;
    chapterId: number;
    pageNum: number;
    seriesId: number;
    libraryId: number;
    /**
     * For EPUB reader, this can be an optional string of the id of a part marker, to help resume reading position
     * on pages that combine multiple "chapters".
     */
    bookScrollId?: string | null;
    lastModifiedUtc?: string;
};

