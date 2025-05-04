/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AppUserRole } from "./AppUserRole";

export type AppRole = {
    id?: number;
    name?: string | null;
    normalizedName?: string | null;
    concurrencyStamp?: string | null;
    userRoles?: Array<AppUserRole> | null;
};
