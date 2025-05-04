/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AgeRestrictionDto = {
    /**
     * The maximum age rating a user has access to. -1 if not applicable
     */
    ageRating: AgeRestrictionDto.ageRating;
    /**
     * Are Unknowns explicitly allowed against age rating
     */
    includeUnknowns: boolean;
};
export namespace AgeRestrictionDto {
    /**
     * The maximum age rating a user has access to. -1 if not applicable
     */
    export enum ageRating {
        "_0" = 0,
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
        "_-1" = -1,
    }
}
