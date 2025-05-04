/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a set of css overrides the user can upload to Kavita and will load into webui
 */
export type SiteThemeDto = {
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
    provider?: SiteThemeDto.provider;
    previewUrls?: Array<string> | null;
    /**
     * Information about the theme
     */
    description?: string | null;
    /**
     * Author of the Theme (only applies to non-system provided themes)
     */
    author?: string | null;
    /**
     * Last compatible version. System provided will always be most current
     */
    compatibleVersion?: string | null;
    readonly selector?: string | null;
};
export namespace SiteThemeDto {
    /**
     * Where did the theme come from
     */
    export enum provider {
        "_1" = 1,
        "_2" = 2,
    }
}
