/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AgeRestrictionDto } from "./AgeRestrictionDto";
import type { LibraryDto } from "./LibraryDto";

/**
 * Represents a member of a Kavita server.
 */
export type MemberDto = {
    id?: number;
    username?: string | null;
    email?: string | null;
    /**
     * If the member is still pending or not
     */
    isPending?: boolean;
    ageRestriction?: AgeRestrictionDto;
    created?: string;
    createdUtc?: string;
    lastActive?: string;
    lastActiveUtc?: string;
    libraries?: Array<LibraryDto> | null;
    roles?: Array<string> | null;
};
