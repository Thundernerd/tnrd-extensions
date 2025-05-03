/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from './AppUser';
import type { AppUserSmartFilter } from './AppUserSmartFilter';
export type AppUserSideNavStream = {
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
     * Library Id is for StreamType.Library only
     */
    libraryId?: number | null;
    /**
     * Only set for StreamType.ExternalSource
     */
    externalSourceId?: number | null;
    /**
     * For system provided
     */
    streamType?: AppUserSideNavStream.streamType;
    visible?: boolean;
    smartFilter?: AppUserSmartFilter;
    appUserId?: number;
    appUser?: AppUser;
};
export namespace AppUserSideNavStream {
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

