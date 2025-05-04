/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AgeRestrictionDto } from "./AgeRestrictionDto";

export type UpdateUserDto = {
    userId?: number;
    username?: string | null;
    roles?: Array<string> | null;
    /**
     * A list of libraries to grant access to
     */
    libraries?: Array<number> | null;
    ageRestriction?: AgeRestrictionDto;
    /**
     * Email of the user
     */
    email?: string | null;
};
