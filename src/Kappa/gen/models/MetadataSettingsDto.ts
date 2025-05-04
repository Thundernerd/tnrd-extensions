/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetadataFieldMappingDto } from "./MetadataFieldMappingDto";

export type MetadataSettingsDto = {
    /**
     * If writing any sort of metadata from upstream (AniList, Hardcover) source is allowed
     */
    enabled?: boolean;
    /**
     * Allow the Summary to be written
     */
    enableSummary?: boolean;
    /**
     * Allow Publication status to be derived and updated
     */
    enablePublicationStatus?: boolean;
    /**
     * Allow Relationships between series to be set
     */
    enableRelationships?: boolean;
    /**
     * Allow People to be created (including downloading images)
     */
    enablePeople?: boolean;
    /**
     * Allow Start date to be set within the Series
     */
    enableStartDate?: boolean;
    /**
     * Allow setting the Localized name
     */
    enableLocalizedName?: boolean;
    /**
     * Allow setting the cover image
     */
    enableCoverImage?: boolean;
    /**
     * Allow Summary to be set within Chapter/Issue
     */
    enableChapterSummary?: boolean;
    /**
     * Allow Release Date to be set within Chapter/Issue
     */
    enableChapterReleaseDate?: boolean;
    /**
     * Allow Title to be set within Chapter/Issue
     */
    enableChapterTitle?: boolean;
    /**
     * Allow Publisher to be set within Chapter/Issue
     */
    enableChapterPublisher?: boolean;
    /**
     * Allow setting the cover image for the Chapter/Issue
     */
    enableChapterCoverImage?: boolean;
    enableGenres?: boolean;
    enableTags?: boolean;
    /**
     * For Authors and Writers, how should names be stored (Exclusively applied for AniList). This does not affect Character names.
     */
    firstLastPeopleNaming?: boolean;
    /**
     * Any Genres or Tags that if present, will trigger an Age Rating Override. Highest rating will be prioritized for matching.
     */
    ageRatingMappings?: Record<
        string,
        0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1
    > | null;
    /**
     * A list of rules that allow mapping a genre/tag to another genre/tag
     */
    fieldMappings?: Array<MetadataFieldMappingDto> | null;
    /**
     * A list of overrides that will enable writing to locked fields
     */
    overrides?: Array<
        1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
    > | null;
    /**
     * Do not allow any Genre/Tag in this list to be written to Kavita
     */
    blacklist?: Array<string> | null;
    /**
     * Only allow these Tags to be written to Kavita
     */
    whitelist?: Array<string> | null;
    /**
     * Which Roles to allow metadata downloading for
     */
    personRoles?: Array<
        1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
    > | null;
};
