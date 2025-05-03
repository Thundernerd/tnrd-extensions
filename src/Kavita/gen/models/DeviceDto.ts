/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A Device is an entity that can receive data from Kavita (kindle)
 */
export type DeviceDto = {
    /**
     * The device Id
     */
    id?: number;
    /**
     * A name given to this device
     */
    name?: string | null;
    /**
     * An email address associated with the device (ie Kindle). Will be used with Send to functionality
     */
    emailAddress?: string | null;
    /**
     * Platform (ie) Windows 10
     */
    platform?: DeviceDto.platform;
};
export namespace DeviceDto {
    /**
     * Platform (ie) Windows 10
     */
    export enum platform {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

