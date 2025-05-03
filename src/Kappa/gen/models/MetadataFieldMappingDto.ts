/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MetadataFieldMappingDto = {
    id?: number;
    sourceType?: MetadataFieldMappingDto.sourceType;
    destinationType?: MetadataFieldMappingDto.destinationType;
    /**
     * The string in the source
     */
    sourceValue?: string | null;
    /**
     * Write the string as this in the Destination (can also just be the Source)
     */
    destinationValue?: string | null;
    /**
     * If true, the tag will be Moved over vs Copied over
     */
    excludeFromSource?: boolean;
};
export namespace MetadataFieldMappingDto {
    export enum sourceType {
        '_0' = 0,
        '_1' = 1,
    }
    export enum destinationType {
        '_0' = 0,
        '_1' = 1,
    }
}

