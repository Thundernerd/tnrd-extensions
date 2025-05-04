/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { SeriesMetadata } from "./SeriesMetadata";

/**
 * Represents a user entered field that is used as a tagging and grouping mechanism
 */
export type CollectionTag = {
    id?: number;
    /**
     * Visible title of the Tag
     */
    title: string | null;
    /**
     * Absolute path to the (managed) image file
     */
    coverImage?: string | null;
    /**
     * Denotes if the CoverImage has been overridden by the user. If so, it will not be updated during normal scan operations.
     */
    coverImageLocked?: boolean;
    /**
     * A description of the tag
     */
    summary?: string | null;
    /**
     * A normalized string used to check if the tag already exists in the DB
     */
    normalizedTitle: string | null;
    /**
     * A promoted collection tag will allow all linked seriesMetadata's Series to show for all users.
     */
    promoted?: boolean;
    seriesMetadatas?: Array<SeriesMetadata> | null;
    /**
     * Not Used due to not using concurrency update
     */
    readonly rowVersion?: number;
};
