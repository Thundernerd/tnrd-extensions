/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Series } from "./Series";

/**
 * A relation flows between one series and another.
 * Series ---kind---> target
 */
export type SeriesRelation = {
    id?: number;
    /**
     * Represents a relationship between Series
     */
    relationKind?: SeriesRelation.relationKind;
    targetSeries?: Series;
    /**
     * A is Sequel to B. In this example, TargetSeries is A. B will hold the foreign key.
     */
    targetSeriesId?: number;
    series?: Series;
    seriesId?: number;
};
export namespace SeriesRelation {
    /**
     * Represents a relationship between Series
     */
    export enum relationKind {
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
        "_6" = 6,
        "_7" = 7,
        "_8" = 8,
        "_9" = 9,
        "_10" = 10,
        "_11" = 11,
        "_12" = 12,
        "_13" = 13,
        "_14" = 14,
    }
}
