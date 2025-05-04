/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
/**
 * Update Notification denoting a new release available for user to update to
 */
export type UpdateNotificationDto = {
    /**
     * Current installed Version
     */
    currentVersion: string | null;
    /**
     * Semver of the release version
     * <example>0.4.3</example>
     */
    updateVersion: string | null;
    /**
     * Release body in HTML
     */
    updateBody: string | null;
    /**
     * Title of the release
     */
    updateTitle: string | null;
    /**
     * Github Url
     */
    updateUrl: string | null;
    /**
     * If this install is within Docker
     */
    isDocker?: boolean;
    /**
     * Is this a pre-release
     */
    isPrerelease?: boolean;
    /**
     * Date of the publish
     */
    publishDate: string | null;
    /**
     * Is the server on a nightly within this release
     */
    isOnNightlyInRelease?: boolean;
    /**
     * Is the server on an older version
     */
    isReleaseNewer?: boolean;
    /**
     * Is the server on this version
     */
    isReleaseEqual?: boolean;
    added?: Array<string> | null;
    removed?: Array<string> | null;
    changed?: Array<string> | null;
    fixed?: Array<string> | null;
    theme?: Array<string> | null;
    developer?: Array<string> | null;
    api?: Array<string> | null;
    featureRequests?: Array<string> | null;
    knownIssues?: Array<string> | null;
    /**
     * The part above the changelog part
     */
    blogPart?: string | null;
};
