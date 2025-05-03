/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SeriesDto = {
    id?: number;
    name?: string | null;
    originalName?: string | null;
    localizedName?: string | null;
    sortName?: string | null;
    pages?: number;
    coverImageLocked?: boolean;
    /**
     * Sum of pages read from linked Volumes. Calculated at API-time.
     */
    pagesRead?: number;
    /**
     * DateTime representing last time the series was Read. Calculated at API-time.
     */
    latestReadDate?: string;
    /**
     * DateTime representing last time a chapter was added to the Series
     */
    lastChapterAdded?: string;
    /**
     * Rating from logged in user. Calculated at API-time.
     */
    userRating?: number;
    /**
     * If the user has set the rating or not
     */
    hasUserRated?: boolean;
    /**
     * Represents the format of the file
     */
    format?: SeriesDto.format;
    created?: string;
    nameLocked?: boolean;
    sortNameLocked?: boolean;
    localizedNameLocked?: boolean;
    /**
     * Total number of words for the series. Only applies to epubs.
     */
    wordCount?: number;
    libraryId?: number;
    libraryName?: string | null;
    minHoursToRead?: number;
    maxHoursToRead?: number;
    avgHoursToRead?: number;
    /**
     * The highest level folder for this Series
     */
    folderPath?: string | null;
    /**
     * Lowest path (that is under library root) that contains all files for the series.
     */
    lowestFolderPath?: string | null;
    /**
     * The last time the folder for this series was scanned
     */
    lastFolderScanned?: string;
    /**
     * Do not match the series with any external Metadata service. This will automatically opt it out of scrobbling.
     */
    dontMatch?: boolean;
    /**
     * If the series was unable to match, it will be blacklisted until a manual metadata match overrides it
     */
    isBlacklisted?: boolean;
    coverImage?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
};
export namespace SeriesDto {
    /**
     * Represents the format of the file
     */
    export enum format {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

