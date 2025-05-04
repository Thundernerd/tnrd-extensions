/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InviteUserResponse = {
    /**
     * Email link used to setup the user account
     */
    emailLink?: string | null;
    /**
     * Was an email sent (ie is this server accessible)
     */
    emailSent?: boolean;
    /**
     * When a user has an invalid email and is attempting to perform a flow.
     */
    invalidEmail?: boolean;
};
