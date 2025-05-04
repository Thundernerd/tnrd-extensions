/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
export type LoginDto = {
    username?: string | null;
    password?: string | null;
    /**
     * If ApiKey is passed, will ignore username/password for validation
     */
    apiKey?: string | null;
};
