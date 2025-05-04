/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileExtensionDto = {
    extension?: string | null;
    /**
     * Represents the format of the file
     */
    format?: FileExtensionDto.format;
    totalSize?: number;
    totalFiles?: number;
};
export namespace FileExtensionDto {
    /**
     * Represents the format of the file
     */
    export enum format {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
