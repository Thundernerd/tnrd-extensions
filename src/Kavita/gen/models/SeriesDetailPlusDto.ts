/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalSeriesDetailDto } from './ExternalSeriesDetailDto';
import type { RatingDto } from './RatingDto';
import type { RecommendationDto } from './RecommendationDto';
import type { UserReviewDto } from './UserReviewDto';
/**
 * All the data from Kavita+ for Series Detail
 */
export type SeriesDetailPlusDto = {
    recommendations?: RecommendationDto;
    reviews?: Array<UserReviewDto> | null;
    ratings?: Array<RatingDto> | null;
    series?: ExternalSeriesDetailDto;
};

