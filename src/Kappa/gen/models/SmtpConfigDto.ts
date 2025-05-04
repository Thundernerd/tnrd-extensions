/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

export type SmtpConfigDto = {
    senderAddress?: string | null;
    senderDisplayName?: string | null;
    userName?: string | null;
    password?: string | null;
    host?: string | null;
    port?: number;
    enableSsl?: boolean;
    /**
     * Limit in bytes for allowing files to be added as attachments. Defaults to 25MB
     */
    sizeLimit?: number;
    /**
     * Should Kavita use config/templates for Email templates or the default ones
     */
    customizedTemplates?: boolean;
};
