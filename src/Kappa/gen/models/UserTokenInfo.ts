/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
/**
 * Represents information around a user's tokens and their status
 */
export type UserTokenInfo = {
    userId?: number;
    username?: string | null;
    isAniListTokenSet?: boolean;
    isAniListTokenValid?: boolean;
    aniListValidUntilUtc?: string;
    isMalTokenSet?: boolean;
};
