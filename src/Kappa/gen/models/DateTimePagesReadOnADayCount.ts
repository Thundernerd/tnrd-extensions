/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DateTimePagesReadOnADayCount = {
    /**
     * The day of the readings
     */
    value?: string;
    /**
     * Number of pages read
     */
    count?: number;
    /**
     * Format of those files
     */
    format?: DateTimePagesReadOnADayCount.format;
};
export namespace DateTimePagesReadOnADayCount {
    /**
     * Format of those files
     */
    export enum format {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

