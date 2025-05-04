/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { ChapterDto } from "./ChapterDto";
import type { VolumeDto } from "./VolumeDto";

/**
 * This is a special DTO for a UI page in Kavita. This performs sorting and grouping and returns exactly what UI requires for layout.
 * This is subject to change, do not rely on this Data model.
 */
export type SeriesDetailDto = {
    /**
     * Specials for the Series. These will have their title and range cleaned to remove the special marker and prepare
     */
    specials?: Array<ChapterDto> | null;
    /**
     * All Chapters, excluding Specials and single chapters (0 chapter) for a volume
     */
    chapters?: Array<ChapterDto> | null;
    /**
     * Just the Volumes for the Series (Excludes Volume 0)
     */
    volumes?: Array<VolumeDto> | null;
    /**
     * These are chapters that are in Volume 0 and should be read AFTER the volumes
     */
    storylineChapters?: Array<ChapterDto> | null;
    /**
     * How many chapters are unread
     */
    unreadCount?: number;
    /**
     * How many chapters are there
     */
    totalCount?: number;
};
