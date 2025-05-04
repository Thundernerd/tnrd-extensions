/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterStatementDto } from "./FilterStatementDto";
import type { SortOptions } from "./SortOptions";

/**
 * Metadata filtering for v2 API only
 */
export type FilterV2Dto = {
    /**
     * Not used in the UI.
     */
    id?: number;
    /**
     * The name of the filter
     */
    name?: string | null;
    statements?: Array<FilterStatementDto> | null;
    combination?: FilterV2Dto.combination;
    sortOptions?: SortOptions;
    /**
     * Limit the number of rows returned. Defaults to not applying a limit (aka 0)
     */
    limitTo?: number;
};
export namespace FilterV2Dto {
    export enum combination {
        "_0" = 0,
        "_1" = 1,
    }
}
