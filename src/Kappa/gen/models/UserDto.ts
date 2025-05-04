/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgeRestrictionDto } from "./AgeRestrictionDto";
import type { UserPreferencesDto } from "./UserPreferencesDto";

export type UserDto = {
    username?: string | null;
    email?: string | null;
    token?: string | null;
    refreshToken?: string | null;
    apiKey?: string | null;
    preferences?: UserPreferencesDto;
    ageRestriction?: AgeRestrictionDto;
    kavitaVersion?: string | null;
};
