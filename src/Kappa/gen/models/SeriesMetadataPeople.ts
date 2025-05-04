/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Person } from "./Person";
import type { SeriesMetadata } from "./SeriesMetadata";

export type SeriesMetadataPeople = {
    seriesMetadataId?: number;
    seriesMetadata?: SeriesMetadata;
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
    role: SeriesMetadataPeople.role;
};
export namespace SeriesMetadataPeople {
    export enum role {
        "_1" = 1,
        "_3" = 3,
        "_4" = 4,
        "_5" = 5,
        "_6" = 6,
        "_7" = 7,
        "_8" = 8,
        "_9" = 9,
        "_10" = 10,
        "_11" = 11,
        "_12" = 12,
        "_13" = 13,
        "_14" = 14,
        "_15" = 15,
    }
}
