/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SeriesDto } from "./SeriesDto";

export type RelatedSeriesDto = {
    /**
     * The parent relationship Series
     */
    sourceSeriesId?: number;
    sequels?: Array<SeriesDto> | null;
    prequels?: Array<SeriesDto> | null;
    spinOffs?: Array<SeriesDto> | null;
    adaptations?: Array<SeriesDto> | null;
    sideStories?: Array<SeriesDto> | null;
    characters?: Array<SeriesDto> | null;
    contains?: Array<SeriesDto> | null;
    others?: Array<SeriesDto> | null;
    alternativeSettings?: Array<SeriesDto> | null;
    alternativeVersions?: Array<SeriesDto> | null;
    doujinshis?: Array<SeriesDto> | null;
    parent?: Array<SeriesDto> | null;
    editions?: Array<SeriesDto> | null;
    annuals?: Array<SeriesDto> | null;
};
