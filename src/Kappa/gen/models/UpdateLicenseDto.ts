/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

export type UpdateLicenseDto = {
    /**
     * License Key received from Kavita+
     */
    license: string | null;
    /**
     * Email registered with Stripe
     */
    email: string | null;
    /**
     * Optional DiscordId
     */
    discordId?: string | null;
};
