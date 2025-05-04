/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DownloadableSiteThemeDto = {
    /**
     * Theme Name
     */
    name?: string | null;
    /**
     * Url to download css file
     */
    cssUrl?: string | null;
    cssFile?: string | null;
    /**
     * Url to preview image
     */
    previewUrls?: Array<string> | null;
    /**
     * If Already downloaded
     */
    alreadyDownloaded?: boolean;
    /**
     * Sha of the file
     */
    sha?: string | null;
    /**
     * Path of the Folder the files reside in
     */
    path?: string | null;
    /**
     * Author of the theme
     */
    author?: string | null;
    /**
     * Last version tested against
     */
    lastCompatibleVersion?: string | null;
    /**
     * If version compatible with version
     */
    isCompatible?: boolean;
    /**
     * Small blurb about the Theme
     */
    description?: string | null;
};
