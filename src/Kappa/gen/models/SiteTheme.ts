/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a set of css overrides the user can upload to Kavita and will load into webui
 */
export type SiteTheme = {
    id?: number;
    /**
     * Name of the Theme
     */
    name: string | null;
    /**
     * Normalized name for lookups
     */
    normalizedName: string | null;
    /**
     * File path to the content. Stored under API.Services.DirectoryService.SiteThemeDirectory.
     * Must be a .css file
     */
    fileName: string | null;
    /**
     * Only one theme can have this. Will auto-set this as default for new user accounts
     */
    isDefault?: boolean;
    /**
     * Where did the theme come from
     */
    provider?: SiteTheme.provider;
    created?: string;
    lastModified?: string;
    createdUtc?: string;
    lastModifiedUtc?: string;
    /**
     * The Url on the repo to download the file from
     */
    gitHubPath?: string | null;
    /**
     * Hash of the Css File
     */
    shaHash?: string | null;
    /**
     * Pipe (|) separated urls of the images. Empty string if
     */
    previewUrls?: string | null;
    description?: string | null;
    author?: string | null;
    compatibleVersion?: string | null;
};
export namespace SiteTheme {
    /**
     * Where did the theme come from
     */
    export enum provider {
        "_1" = 1,
        "_2" = 2,
    }
}
