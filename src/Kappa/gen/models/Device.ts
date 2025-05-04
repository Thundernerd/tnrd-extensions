/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from "./AppUser";

/**
 * A Device is an entity that can receive data from Kavita (kindle)
 */
export type Device = {
    id?: number;
    /**
     * Last Seen IP Address of the device
     */
    ipAddress?: string | null;
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
    platform?: Device.platform;
    appUserId?: number;
    appUser?: AppUser;
    /**
     * Last time this device was used to send a file
     */
    lastUsed?: string;
    lastUsedUtc?: string;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
};
export namespace Device {
    /**
     * Platform (ie) Windows 10
     */
    export enum platform {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
    }
}
