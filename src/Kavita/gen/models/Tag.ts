/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chapter } from './Chapter';
import type { SeriesMetadata } from './SeriesMetadata';
export type Tag = {
    id?: number;
    title: string | null;
    normalizedTitle: string | null;
    seriesMetadatas?: Array<SeriesMetadata> | null;
    chapters?: Array<Chapter> | null;
};

