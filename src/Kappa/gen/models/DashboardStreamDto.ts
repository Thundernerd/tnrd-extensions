/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DashboardStreamDto = {
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
     * For system provided
     */
    streamType?: DashboardStreamDto.streamType;
    visible?: boolean;
};
export namespace DashboardStreamDto {
    /**
     * For system provided
     */
    export enum streamType {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
}

