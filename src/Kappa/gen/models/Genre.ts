/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { Chapter } from "./Chapter";
import type { SeriesMetadata } from "./SeriesMetadata";

export type Genre = {
    id?: number;
    title: string | null;
    normalizedTitle: string | null;
    seriesMetadatas?: Array<SeriesMetadata> | null;
    chapters?: Array<Chapter> | null;
};
