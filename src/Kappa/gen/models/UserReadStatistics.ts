/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { SingleStatCount } from "./SingleStatCount";

export type UserReadStatistics = {
    /**
     * Total number of pages read
     */
    totalPagesRead?: number;
    /**
     * Total number of words read
     */
    totalWordsRead?: number;
    /**
     * Total time spent reading based on estimates
     */
    timeSpentReading?: number;
    chaptersRead?: number;
    lastActive?: string;
    avgHoursPerWeekSpentReading?: number;
    percentReadPerLibrary?: Array<SingleStatCount> | null;
};
