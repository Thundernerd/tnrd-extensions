/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionTag } from './CollectionTag';
import type { Genre } from './Genre';
import type { Series } from './Series';
import type { SeriesMetadataPeople } from './SeriesMetadataPeople';
import type { Tag } from './Tag';
export type SeriesMetadata = {
    id?: number;
    summary?: string | null;
    /**
     * Highest Age Rating from all Chapters
     */
    ageRating?: SeriesMetadata.ageRating;
    /**
     * Earliest Year from all chapters
     */
    releaseYear?: number;
    /**
     * Language of the content (BCP-47 code)
     */
    language?: string | null;
    /**
     * Total expected number of issues/volumes in the series from ComicInfo.xml
     */
    totalCount?: number;
    /**
     * Max number of issues/volumes in the series (Max of Volume/Number field in ComicInfo)
     */
    maxCount?: number;
    publicationStatus?: SeriesMetadata.publicationStatus;
    /**
     * A Comma-separated list of strings representing links from the series
     */
    webLinks?: string | null;
    languageLocked?: boolean;
    summaryLocked?: boolean;
    /**
     * Locked by user so metadata updates from scan loop will not override AgeRating
     */
    ageRatingLocked?: boolean;
    /**
     * Locked by user so metadata updates from scan loop will not override PublicationStatus
     */
    publicationStatusLocked?: boolean;
    genresLocked?: boolean;
    tagsLocked?: boolean;
    writerLocked?: boolean;
    characterLocked?: boolean;
    coloristLocked?: boolean;
    editorLocked?: boolean;
    inkerLocked?: boolean;
    imprintLocked?: boolean;
    lettererLocked?: boolean;
    pencillerLocked?: boolean;
    publisherLocked?: boolean;
    translatorLocked?: boolean;
    teamLocked?: boolean;
    locationLocked?: boolean;
    coverArtistLocked?: boolean;
    releaseYearLocked?: boolean;
    /**
     * @deprecated
     */
    collectionTags?: Array<CollectionTag> | null;
    genres?: Array<Genre> | null;
    tags?: Array<Tag> | null;
    /**
     * All people attached at a Series level.
     */
    people?: Array<SeriesMetadataPeople> | null;
    seriesId?: number;
    series?: Series;
    readonly rowVersion?: number;
};
export namespace SeriesMetadata {
    /**
     * Highest Age Rating from all Chapters
     */
    export enum ageRating {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
        '_14' = 14,
        '_-1' = -1,
    }
    export enum publicationStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

