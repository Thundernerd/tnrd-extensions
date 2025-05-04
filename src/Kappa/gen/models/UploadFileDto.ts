/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

export type UploadFileDto = {
    /**
     * Id of the Entity
     */
    id: number;
    /**
     * Base Url encoding of the file to upload from (can be null)
     */
    url: string | null;
    /**
     * Lock the cover or not
     */
    lockCover?: boolean;
};
