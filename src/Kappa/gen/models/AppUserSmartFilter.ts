/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from "./AppUser";

/**
 * Represents a Saved user Filter
 */
export type AppUserSmartFilter = {
    id?: number;
    name: string | null;
    /**
     * This is the Filter url encoded. It is decoded and reconstructed into a API.DTOs.Filtering.v2.FilterV2Dto
     */
    filter: string | null;
    appUserId?: number;
    appUser?: AppUser;
};
