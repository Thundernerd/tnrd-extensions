/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { AppUserCollectionDto } from "./AppUserCollectionDto";
import type { BookmarkSearchResultDto } from "./BookmarkSearchResultDto";
import type { ChapterDto } from "./ChapterDto";
import type { GenreTagDto } from "./GenreTagDto";
import type { LibraryDto } from "./LibraryDto";
import type { MangaFileDto } from "./MangaFileDto";
import type { PersonDto } from "./PersonDto";
import type { ReadingListDto } from "./ReadingListDto";
import type { SearchResultDto } from "./SearchResultDto";
import type { TagDto } from "./TagDto";

/**
 * Represents all Search results for a query
 */
export type SearchResultGroupDto = {
    libraries?: Array<LibraryDto> | null;
    series?: Array<SearchResultDto> | null;
    collections?: Array<AppUserCollectionDto> | null;
    readingLists?: Array<ReadingListDto> | null;
    persons?: Array<PersonDto> | null;
    genres?: Array<GenreTagDto> | null;
    tags?: Array<TagDto> | null;
    files?: Array<MangaFileDto> | null;
    chapters?: Array<ChapterDto> | null;
    bookmarks?: Array<BookmarkSearchResultDto> | null;
};
