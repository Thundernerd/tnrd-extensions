/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalSourceDto } from './ExternalSourceDto';
import type { LibraryDto } from './LibraryDto';
export type SideNavStreamDto = {
    id?: number;
    name: string | null;
    /**
     * Is System Provided
     */
    isProvided?: boolean;
    /**
     * Sort Order on the Dashboard
     */
    order?: number;
    /**
     * If Not IsProvided, the appropriate smart filter
     */
    smartFilterEncoded?: string | null;
    smartFilterId?: number | null;
    /**
     * External Source Url if configured
     */
    externalSourceId?: number;
    externalSource?: ExternalSourceDto;
    /**
     * For system provided
     */
    streamType?: SideNavStreamDto.streamType;
    visible?: boolean;
    libraryId?: number | null;
    library?: LibraryDto;
};
export namespace SideNavStreamDto {
    /**
     * For system provided
     */
    export enum streamType {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
    }
}

