/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from "./AppUser";
import type { AppUserSmartFilter } from "./AppUserSmartFilter";

export type AppUserDashboardStream = {
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
     * For system provided
     */
    streamType?: AppUserDashboardStream.streamType;
    visible?: boolean;
    smartFilter?: AppUserSmartFilter;
    appUserId?: number;
    appUser?: AppUser;
};
export namespace AppUserDashboardStream {
    /**
     * For system provided
     */
    export enum streamType {
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
    }
}
