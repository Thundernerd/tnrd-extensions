/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

/**
 * This is just for the Server tab on UI
 */
export type ServerInfoSlimDto = {
    /**
     * Unique Id that represents a unique install
     */
    installId: string | null;
    /**
     * If the Kavita install is using Docker
     */
    isDocker?: boolean;
    /**
     * Version of Kavita
     */
    kavitaVersion: string | null;
    /**
     * The Date Kavita was first installed
     */
    firstInstallDate?: string | null;
    /**
     * The Version of Kavita on the first run
     */
    firstInstallVersion?: string | null;
};
