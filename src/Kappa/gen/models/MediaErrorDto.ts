/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MediaErrorDto = {
    /**
     * Format Type (RAR, ZIP, 7Zip, Epub, PDF)
     */
    extension: string | null;
    /**
     * Full Filepath to the file that has some issue
     */
    filePath: string | null;
    /**
     * Developer defined string
     */
    comment?: string | null;
    /**
     * Exception message
     */
    details?: string | null;
    createdUtc?: string;
};
