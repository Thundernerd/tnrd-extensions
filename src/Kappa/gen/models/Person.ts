/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChapterPeople } from './ChapterPeople';
import type { SeriesMetadataPeople } from './SeriesMetadataPeople';
export type Person = {
    id?: number;
    name: string | null;
    normalizedName: string | null;
    coverImage?: string | null;
    coverImageLocked?: boolean;
    primaryColor?: string | null;
    secondaryColor?: string | null;
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
     * https://metron.cloud/creator/{slug}/
     */
    chapterPeople?: Array<ChapterPeople> | null;
    seriesMetadataPeople?: Array<SeriesMetadataPeople> | null;
};

