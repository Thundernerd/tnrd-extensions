/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateDeviceDto = {
    id: number;
    name: string;
    /**
     * Platform of the device. If not know, defaults to "Custom"
     */
    platform: UpdateDeviceDto.platform;
    emailAddress: string;
};
export namespace UpdateDeviceDto {
    /**
     * Platform of the device. If not know, defaults to "Custom"
     */
    export enum platform {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

