/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RatingDto = {
    averageScore?: number;
    favoriteCount?: number;
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    provider?: RatingDto.provider;
    authority?: RatingDto.authority;
    providerUrl?: string | null;
};
export namespace RatingDto {
    /**
     * Misleading name but is the source of data (like a review coming from AniList)
     */
    export enum provider {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
    export enum authority {
        "_0" = 0,
        "_1" = 1,
    }
}
