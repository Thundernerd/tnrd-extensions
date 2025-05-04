/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Used to browse writers and click in to see their series
 */
export type BrowsePersonDto = {
    id?: number;
    name: string | null;
    coverImageLocked?: boolean;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    coverImage?: string | null;
    description?: string | null;
    /**
     * ASIN for person
     */
    asin?: string | null;
    /**
     * https://anilist.co/staff/{AniListId}/
     */
    aniListId?: number;
    /**
     * https://myanimelist.net/people/{MalId}/
     * https://myanimelist.net/character/{MalId}/CharacterName
     */
    malId?: number;
    /**
     * https://hardcover.app/authors/{HardcoverId}
     */
    hardcoverId?: string | null;
    /**
     * Number of Series this Person is the Writer for
     */
    seriesCount?: number;
    /**
     * Number or Issues this Person is the Writer for
     */
    issueCount?: number;
};
