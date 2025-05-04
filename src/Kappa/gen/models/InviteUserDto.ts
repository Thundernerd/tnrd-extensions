/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AgeRestrictionDto } from "./AgeRestrictionDto";

export type InviteUserDto = {
    email: string;
    /**
     * List of Roles to assign to user. If admin not present, Pleb will be applied.
     * If admin present, all libraries will be granted access and will ignore those from DTO.
     */
    roles?: Array<string> | null;
    /**
     * A list of libraries to grant access to
     */
    libraries?: Array<number> | null;
    ageRestriction?: AgeRestrictionDto;
};
