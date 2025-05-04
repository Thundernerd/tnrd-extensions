/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { Chapter } from "./Chapter";
import type { ReadingList } from "./ReadingList";
import type { Series } from "./Series";
import type { Volume } from "./Volume";

export type ReadingListItem = {
    id?: number;
    seriesId?: number;
    volumeId?: number;
    chapterId?: number;
    /**
     * Order of the chapter within a Reading List
     */
    order?: number;
    readingList?: ReadingList;
    readingListId?: number;
    series?: Series;
    volume?: Volume;
    chapter?: Chapter;
};
