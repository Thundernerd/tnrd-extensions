/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { Int32Range } from "./Int32Range";
import type { ReadStatus } from "./ReadStatus";
import type { SortOptions } from "./SortOptions";

export type FilterDto = {
    /**
     * The type of Formats you want to be returned. An empty list will return all formats back
     */
    formats?: Array<0 | 1 | 2 | 3 | 4> | null;
    readStatus?: ReadStatus;
    /**
     * A list of library ids to restrict search to. Defaults to all libraries by passing empty list
     */
    libraries?: Array<number> | null;
    /**
     * A list of Genre ids to restrict search to. Defaults to all genres by passing an empty list
     */
    genres?: Array<number> | null;
    /**
     * A list of Writers to restrict search to. Defaults to all Writers by passing an empty list
     */
    writers?: Array<number> | null;
    /**
     * A list of Penciller ids to restrict search to. Defaults to all Pencillers by passing an empty list
     */
    penciller?: Array<number> | null;
    /**
     * A list of Inker ids to restrict search to. Defaults to all Inkers by passing an empty list
     */
    inker?: Array<number> | null;
    /**
     * A list of Colorist ids to restrict search to. Defaults to all Colorists by passing an empty list
     */
    colorist?: Array<number> | null;
    /**
     * A list of Letterer ids to restrict search to. Defaults to all Letterers by passing an empty list
     */
    letterer?: Array<number> | null;
    /**
     * A list of CoverArtist ids to restrict search to. Defaults to all CoverArtists by passing an empty list
     */
    coverArtist?: Array<number> | null;
    /**
     * A list of Editor ids to restrict search to. Defaults to all Editors by passing an empty list
     */
    editor?: Array<number> | null;
    /**
     * A list of Publisher ids to restrict search to. Defaults to all Publishers by passing an empty list
     */
    publisher?: Array<number> | null;
    /**
     * A list of Character ids to restrict search to. Defaults to all Characters by passing an empty list
     */
    character?: Array<number> | null;
    /**
     * A list of Translator ids to restrict search to. Defaults to all Translatorss by passing an empty list
     */
    translators?: Array<number> | null;
    /**
     * A list of Collection Tag ids to restrict search to. Defaults to all Collection Tags by passing an empty list
     */
    collectionTags?: Array<number> | null;
    /**
     * A list of Tag ids to restrict search to. Defaults to all Tags by passing an empty list
     */
    tags?: Array<number> | null;
    /**
     * Will return back everything with the rating and above
     * API.Entities.AppUserRating.Rating
     */
    rating?: number;
    sortOptions?: SortOptions;
    /**
     * Age Ratings. Empty list will return everything back
     */
    ageRating?: Array<
        0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1
    > | null;
    /**
     * Languages (ISO 639-1 code) to filter by. Empty list will return everything back
     */
    languages?: Array<string> | null;
    /**
     * Publication statuses to filter by. Empty list will return everything back
     */
    publicationStatus?: Array<0 | 1 | 2 | 3 | 4> | null;
    /**
     * An optional name string to filter by. Empty string will ignore.
     */
    seriesNameQuery?: string | null;
    releaseYearRange?: Int32Range;
};
