/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ScrobbleEventDto = {
    seriesName?: string | null;
    seriesId?: number;
    libraryId?: number;
    isProcessed?: boolean;
    volumeNumber?: number | null;
    chapterNumber?: number | null;
    lastModifiedUtc?: string;
    createdUtc?: string;
    rating?: number | null;
    scrobbleEventType?: ScrobbleEventDto.scrobbleEventType;
    isErrored?: boolean;
    errorDetails?: string | null;
};
export namespace ScrobbleEventDto {
    export enum scrobbleEventType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

