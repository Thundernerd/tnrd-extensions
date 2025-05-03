/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from './AppUser';
import type { Series } from './Series';
export type ScrobbleHold = {
    id?: number;
    seriesId?: number;
    series?: Series;
    appUserId?: number;
    appUser?: AppUser;
    created?: string;
    createdUtc?: string;
    lastModified?: string;
    lastModifiedUtc?: string;
};

