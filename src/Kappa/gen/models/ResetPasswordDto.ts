/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ResetPasswordDto = {
    /**
     * The Username of the User
     */
    userName: string;
    /**
     * The new password
     */
    password: string;
    /**
     * The old, existing password. If an admin is performing the change, this is not required. Otherwise, it is.
     */
    oldPassword?: string | null;
};
