/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { SeriesDto } from "./SeriesDto";

export type BookmarkDto = {
    id?: number;
    page: number;
    volumeId: number;
    seriesId: number;
    chapterId: number;
    series?: SeriesDto;
};
