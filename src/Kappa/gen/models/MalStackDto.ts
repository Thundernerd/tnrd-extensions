/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an Interest Stack from MAL
 */
export type MalStackDto = {
    title: string | null;
    stackId: number;
    url: string | null;
    author: string | null;
    seriesCount: number;
    restackCount: number;
    /**
     * If an existing collection exists within Kavita
     */
    existingId?: number;
};
