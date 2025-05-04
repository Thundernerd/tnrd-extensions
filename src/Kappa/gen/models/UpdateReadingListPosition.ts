/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DTO for moving a reading list item to another position within the same list
 */
export type UpdateReadingListPosition = {
    readingListId: number;
    readingListItemId: number;
    fromPosition?: number;
    toPosition: number;
};
