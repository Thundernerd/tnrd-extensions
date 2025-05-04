/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SearchResultDto = {
    seriesId?: number;
    name?: string | null;
    originalName?: string | null;
    sortName?: string | null;
    localizedName?: string | null;
    /**
     * Represents the format of the file
     */
    format?: SearchResultDto.format;
    libraryName?: string | null;
    libraryId?: number;
};
export namespace SearchResultDto {
    /**
     * Represents the format of the file
     */
    export enum format {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
