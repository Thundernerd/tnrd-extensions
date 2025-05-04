/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUserBookmark } from "./AppUserBookmark";
import type { AppUserChapterRating } from "./AppUserChapterRating";
import type { AppUserCollection } from "./AppUserCollection";
import type { AppUserDashboardStream } from "./AppUserDashboardStream";
import type { AppUserExternalSource } from "./AppUserExternalSource";
import type { AppUserPreferences } from "./AppUserPreferences";
import type { AppUserProgress } from "./AppUserProgress";
import type { AppUserRating } from "./AppUserRating";
import type { AppUserRole } from "./AppUserRole";
import type { AppUserSideNavStream } from "./AppUserSideNavStream";
import type { AppUserSmartFilter } from "./AppUserSmartFilter";
import type { AppUserTableOfContent } from "./AppUserTableOfContent";
import type { AppUserWantToRead } from "./AppUserWantToRead";
import type { Device } from "./Device";
import type { Library } from "./Library";
import type { ReadingList } from "./ReadingList";
import type { ScrobbleHold } from "./ScrobbleHold";

export type AppUser = {
    id?: number;
    userName?: string | null;
    normalizedUserName?: string | null;
    email?: string | null;
    normalizedEmail?: string | null;
    emailConfirmed?: boolean;
    passwordHash?: string | null;
    securityStamp?: string | null;
    concurrencyStamp?: string | null;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | null;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    created?: string;
    createdUtc?: string;
    lastActive?: string;
    lastActiveUtc?: string;
    libraries?: Array<Library> | null;
    userRoles?: Array<AppUserRole> | null;
    progresses?: Array<AppUserProgress> | null;
    ratings?: Array<AppUserRating> | null;
    chapterRatings?: Array<AppUserChapterRating> | null;
    userPreferences?: AppUserPreferences;
    /**
     * Bookmarks associated with this User
     */
    bookmarks?: Array<AppUserBookmark> | null;
    /**
     * Reading lists associated with this user
     */
    readingLists?: Array<ReadingList> | null;
    /**
     * Collections associated with this user
     */
    collections?: Array<AppUserCollection> | null;
    /**
     * A list of Series the user want's to read
     */
    wantToRead?: Array<AppUserWantToRead> | null;
    /**
     * A list of Devices which allows the user to send files to
     */
    devices?: Array<Device> | null;
    /**
     * A list of Table of Contents for a given Chapter
     */
    tableOfContents?: Array<AppUserTableOfContent> | null;
    /**
     * An API Key to interact with external services, like OPDS
     */
    apiKey?: string | null;
    /**
     * The confirmation token for the user (invite). This will be set to null after the user confirms.
     */
    confirmationToken?: string | null;
    /**
     * The highest age rating the user has access to. Not applicable for admins
     */
    ageRestriction?: AppUser.ageRestriction;
    /**
     * If an age rating restriction is applied to the account, if Unknowns should be allowed for the user. Defaults to false.
     */
    ageRestrictionIncludeUnknowns?: boolean;
    /**
     * The JWT for the user's AniList account. Expires after a year.
     */
    aniListAccessToken?: string | null;
    /**
     * The Username of the MAL user
     */
    malUserName?: string | null;
    /**
     * The Client ID for the user's MAL account. User should create a client on MAL for this.
     */
    malAccessToken?: string | null;
    /**
     * Has the user ran Scrobble Event Generation
     */
    hasRunScrobbleEventGeneration?: boolean;
    /**
     * The timestamp of when Scrobble Event Generation ran (Utc)
     */
    scrobbleEventGenerationRan?: string;
    /**
     * A list of Series the user doesn't want scrobbling for
     */
    scrobbleHolds?: Array<ScrobbleHold> | null;
    /**
     * A collection of user Smart Filters for their account
     */
    smartFilters?: Array<AppUserSmartFilter> | null;
    /**
     * An ordered list of Streams (pre-configured) or Smart Filters that makes up the User's Dashboard
     */
    dashboardStreams?: Array<AppUserDashboardStream> | null;
    /**
     * An ordered list of Streams (pre-configured) or Smart Filters that makes up the User's SideNav
     */
    sideNavStreams?: Array<AppUserSideNavStream> | null;
    externalSources?: Array<AppUserExternalSource> | null;
    readonly rowVersion?: number;
};
export namespace AppUser {
    /**
     * The highest age rating the user has access to. Not applicable for admins
     */
    export enum ageRestriction {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
        "_6" = 6,
        "_7" = 7,
        "_8" = 8,
        "_9" = 9,
        "_10" = 10,
        "_11" = 11,
        "_12" = 12,
        "_13" = 13,
        "_14" = 14,
        "_-1" = -1,
    }
}
