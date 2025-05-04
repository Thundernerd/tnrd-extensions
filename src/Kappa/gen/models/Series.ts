/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUserCollection } from "./AppUserCollection";
import type { AppUserProgress } from "./AppUserProgress";
import type { AppUserRating } from "./AppUserRating";
import type { ExternalSeriesMetadata } from "./ExternalSeriesMetadata";
import type { Library } from "./Library";
import type { SeriesMetadata } from "./SeriesMetadata";
import type { SeriesRelation } from "./SeriesRelation";
import type { Volume } from "./Volume";

export type Series = {
    id?: number;
    /**
     * The UI visible Name of the Series. This may or may not be the same as the OriginalName
     */
    name: string | null;
    /**
     * Used internally for name matching. M:API.Services.Tasks.Scanner.Parser.Parser.Normalize(System.String)
     */
    normalizedName: string | null;
    /**
     * Used internally for localized name matching. M:API.Services.Tasks.Scanner.Parser.Parser.Normalize(System.String)
     */
    normalizedLocalizedName: string | null;
    /**
     * The name used to sort the Series. By default, will be the same as Name.
     */
    sortName: string | null;
    /**
     * Name in original language (Japanese for Manga). By default, will be same as Name.
     */
    localizedName: string | null;
    /**
     * Original Name on disk. Not exposed to UI.
     */
    originalName: string | null;
    /**
     * Time of creation
     */
    created?: string;
    /**
     * Whenever a modification occurs. ex: New volumes, removed volumes, title update, etc
     */
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    /**
     * Absolute path to the (managed) image file
     */
    coverImage?: string | null;
    /**
     * Denotes if the CoverImage has been overridden by the user. If so, it will not be updated during normal scan operations.
     */
    coverImageLocked?: boolean;
    /**
     * Sum of all Volume page counts
     */
    pages?: number;
    /**
     * Highest path (that is under library root) that contains the series.
     */
    folderPath?: string | null;
    /**
     * Lowest path (that is under library root) that contains all files for the series.
     */
    lowestFolderPath?: string | null;
    /**
     * Last time the folder was scanned
     */
    lastFolderScanned?: string;
    /**
     * Last time the folder was scanned in Utc
     */
    lastFolderScannedUtc?: string;
    /**
     * The type of all the files attached to this series
     */
    format?: Series.format;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    sortNameLocked?: boolean;
    localizedNameLocked?: boolean;
    /**
     * When a Chapter was last added onto the Series
     */
    lastChapterAdded?: string;
    lastChapterAddedUtc?: string;
    /**
     * Total Word count of all chapters in this chapter.
     */
    wordCount?: number;
    minHoursToRead?: number;
    maxHoursToRead?: number;
    avgHoursToRead?: number;
    /**
     * Do not match the series with any external Metadata service. This will automatically opt it out of scrobbling.
     */
    dontMatch?: boolean;
    /**
     * If the series was unable to match, it will be blacklisted until a manual metadata match overrides it
     */
    isBlacklisted?: boolean;
    metadata?: SeriesMetadata;
    externalSeriesMetadata?: ExternalSeriesMetadata;
    ratings?: Array<AppUserRating> | null;
    progress?: Array<AppUserProgress> | null;
    collections?: Array<AppUserCollection> | null;
    /**
     * Relations to other Series, like Sequels, Prequels, etc
     */
    relations?: Array<SeriesRelation> | null;
    relationOf?: Array<SeriesRelation> | null;
    volumes?: Array<Volume> | null;
    library?: Library;
    libraryId?: number;
};
export namespace Series {
    /**
     * The type of all the files attached to this series
     */
    export enum format {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
