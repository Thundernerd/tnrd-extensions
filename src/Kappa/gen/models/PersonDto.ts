/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PersonDto = {
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
};

