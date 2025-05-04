/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Library } from "./Library";

export type FolderPath = {
    id?: number;
    path: string | null;
    /**
     * Used when scanning to see if we can skip if nothing has changed
     */
    lastScanned?: string;
    library?: Library;
    libraryId?: number;
};
