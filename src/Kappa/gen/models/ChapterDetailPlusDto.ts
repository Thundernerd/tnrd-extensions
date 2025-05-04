/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { RatingDto } from "./RatingDto";
import type { UserReviewDto } from "./UserReviewDto";

export type ChapterDetailPlusDto = {
    rating?: number;
    hasBeenRated?: boolean;
    reviews?: Array<UserReviewDto> | null;
    ratings?: Array<RatingDto> | null;
};
