/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chapter } from './Chapter';
import type { Person } from './Person';
export type ChapterPeople = {
    chapterId?: number;
    chapter?: Chapter;
    personId?: number;
    person?: Person;
    /**
     * The source of this connection. If not Kavita, this implies Metadata Download linked this and it can be removed between matches
     */
    kavitaPlusConnection?: boolean;
    /**
     * A weight that allows lower numbers to sort first
     */
    orderWeight?: number;
    role: ChapterPeople.role;
};
export namespace ChapterPeople {
    export enum role {
        '_1' = 1,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
        '_14' = 14,
        '_15' = 15,
    }
}

