/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { AppUser } from "./AppUser";
import type { Series } from "./Series";

export type AppUserWantToRead = {
    id?: number;
    seriesId: number;
    series?: Series;
    appUser?: AppUser;
    /**
     * User this table of content belongs to
     */
    appUserId?: number;
};
