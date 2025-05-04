/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { LibraryDtoICount } from "./LibraryDtoICount";
import type { SeriesDto } from "./SeriesDto";
import type { SeriesDtoICount } from "./SeriesDtoICount";
import type { UserDtoICount } from "./UserDtoICount";

export type ServerStatisticsDto = {
    chapterCount?: number;
    volumeCount?: number;
    seriesCount?: number;
    totalFiles?: number;
    totalSize?: number;
    totalGenres?: number;
    totalTags?: number;
    totalPeople?: number;
    totalReadingTime?: number;
    mostReadSeries?: Array<SeriesDtoICount> | null;
    /**
     * Total users who have started/reading/read per series
     */
    mostPopularSeries?: Array<SeriesDtoICount> | null;
    mostActiveUsers?: Array<UserDtoICount> | null;
    mostActiveLibraries?: Array<LibraryDtoICount> | null;
    /**
     * Last 5 Series read
     */
    recentlyRead?: Array<SeriesDto> | null;
};
