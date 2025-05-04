/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { Chapter } from "./Chapter";
import type { Series } from "./Series";

export type Volume = {
    id?: number;
    /**
     * A String representation of the volume number. Allows for floats. Can also include a range (1-2).
     */
    name: string | null;
    /**
     * This is just the original Parsed volume number for lookups
     */
    lookupName?: string | null;
    /**
     * The minimum number in the Name field in Int form
     * @deprecated
     */
    number?: number;
    /**
     * The minimum number in the Name field
     */
    minNumber: number;
    /**
     * The maximum number in the Name field (same as Minimum if Name isn't a range)
     */
    maxNumber: number;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    coverImage?: string | null;
    coverImageLocked?: boolean;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    /**
     * Total pages of all chapters in this volume
     */
    pages?: number;
    /**
     * Total Word count of all chapters in this volume.
     */
    wordCount?: number;
    minHoursToRead?: number;
    maxHoursToRead?: number;
    avgHoursToRead?: number;
    chapters?: Array<Chapter> | null;
    series?: Series;
    seriesId?: number;
};
