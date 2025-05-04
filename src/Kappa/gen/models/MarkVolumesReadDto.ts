/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
/**
 * This is used for bulk updating a set of volume and or chapters in one go
 */
export type MarkVolumesReadDto = {
    seriesId?: number;
    /**
     * A list of Volumes to mark read
     */
    volumeIds?: Array<number> | null;
    /**
     * A list of additional Chapters to mark as read
     */
    chapterIds?: Array<number> | null;
};
