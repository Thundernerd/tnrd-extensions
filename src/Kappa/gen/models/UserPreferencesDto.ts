/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SiteThemeDto } from './SiteThemeDto';
export type UserPreferencesDto = {
    /**
     * Manga Reader Option: What direction should the next/prev page buttons go
     */
    readingDirection: UserPreferencesDto.readingDirection;
    /**
     * Manga Reader Option: How should the image be scaled to screen
     */
    scalingOption: UserPreferencesDto.scalingOption;
    /**
     * Manga Reader Option: Which side of a split image should we show first
     */
    pageSplitOption: UserPreferencesDto.pageSplitOption;
    /**
     * Manga Reader Option: How the manga reader should perform paging or reading of the file
     * <example>
     * Webtoon uses scrolling to page, LeftRight uses paging by clicking left/right side of reader, UpDown uses paging
     * by clicking top/bottom sides of reader.
     * </example>
     */
    readerMode: UserPreferencesDto.readerMode;
    /**
     * Manga Reader Option: How many pages to display in the reader at once
     */
    layoutMode: UserPreferencesDto.layoutMode;
    /**
     * Manga Reader Option: Emulate a book by applying a shadow effect on the pages
     */
    emulateBook: boolean;
    /**
     * Manga Reader Option: Background color of the reader
     */
    backgroundColor: string;
    /**
     * Manga Reader Option: Should swiping trigger pagination
     */
    swipeToPaginate: boolean;
    /**
     * Manga Reader Option: Allow the menu to close after 6 seconds without interaction
     */
    autoCloseMenu: boolean;
    /**
     * Manga Reader Option: Show screen hints to the user on some actions, ie) pagination direction change
     */
    showScreenHints: boolean;
    /**
     * Manga Reader Option: Allow Automatic Webtoon detection
     */
    allowAutomaticWebtoonReaderDetection: boolean;
    /**
     * Book Reader Option: Override extra Margin
     */
    bookReaderMargin: number;
    /**
     * Book Reader Option: Override line-height
     */
    bookReaderLineSpacing: number;
    /**
     * Book Reader Option: Override font size
     */
    bookReaderFontSize: number;
    /**
     * Book Reader Option: Maps to the default Kavita font-family (inherit) or an override
     */
    bookReaderFontFamily: string;
    /**
     * Book Reader Option: Allows tapping on side of screens to paginate
     */
    bookReaderTapToPaginate: boolean;
    /**
     * Book Reader Option: What direction should the next/prev page buttons go
     */
    bookReaderReadingDirection: UserPreferencesDto.bookReaderReadingDirection;
    /**
     * Book Reader Option: What writing style should be used, horizontal or vertical.
     */
    bookReaderWritingStyle: UserPreferencesDto.bookReaderWritingStyle;
    theme: SiteThemeDto;
    bookReaderThemeName: string;
    bookReaderLayoutMode: UserPreferencesDto.bookReaderLayoutMode;
    /**
     * Book Reader Option: A flag that hides the menu-ing system behind a click on the screen. This should be used with tap to paginate, but the app doesn't enforce this.
     */
    bookReaderImmersiveMode: boolean;
    /**
     * Global Site Option: If the UI should layout items as Cards or List items
     */
    globalPageLayoutMode: UserPreferencesDto.globalPageLayoutMode;
    /**
     * UI Site Global Setting: If unread summaries should be blurred until expanded or unless user has read it already
     */
    blurUnreadSummaries: boolean;
    /**
     * UI Site Global Setting: Should Kavita prompt user to confirm downloads that are greater than 100 MB.
     */
    promptForDownloadSize: boolean;
    /**
     * UI Site Global Setting: Should Kavita disable CSS transitions
     */
    noTransitions: boolean;
    /**
     * When showing series, only parent series or series with no relationships will be returned
     */
    collapseSeriesRelationships: boolean;
    /**
     * UI Site Global Setting: Should series reviews be shared with all users in the server
     */
    shareReviews: boolean;
    /**
     * UI Site Global Setting: The language locale that should be used for the user
     */
    locale: string;
    /**
     * PDF Reader: Theme of the Reader
     */
    pdfTheme: UserPreferencesDto.pdfTheme;
    /**
     * PDF Reader: Scroll mode of the reader
     */
    pdfScrollMode: UserPreferencesDto.pdfScrollMode;
    /**
     * PDF Reader: Layout Mode of the reader
     */
    pdfLayoutMode: UserPreferencesDto.pdfLayoutMode;
    /**
     * PDF Reader: Spread Mode of the reader
     */
    pdfSpreadMode: UserPreferencesDto.pdfSpreadMode;
    /**
     * Kavita+: Should this account have Scrobbling enabled for AniList
     */
    aniListScrobblingEnabled?: boolean;
    /**
     * Kavita+: Should this account have Want to Read Sync enabled
     */
    wantToReadSync?: boolean;
};
export namespace UserPreferencesDto {
    /**
     * Manga Reader Option: What direction should the next/prev page buttons go
     */
    export enum readingDirection {
        '_0' = 0,
        '_1' = 1,
    }
    /**
     * Manga Reader Option: How should the image be scaled to screen
     */
    export enum scalingOption {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    /**
     * Manga Reader Option: Which side of a split image should we show first
     */
    export enum pageSplitOption {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    /**
     * Manga Reader Option: How the manga reader should perform paging or reading of the file
     * <example>
     * Webtoon uses scrolling to page, LeftRight uses paging by clicking left/right side of reader, UpDown uses paging
     * by clicking top/bottom sides of reader.
     * </example>
     */
    export enum readerMode {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
    /**
     * Manga Reader Option: How many pages to display in the reader at once
     */
    export enum layoutMode {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    /**
     * Book Reader Option: What direction should the next/prev page buttons go
     */
    export enum bookReaderReadingDirection {
        '_0' = 0,
        '_1' = 1,
    }
    /**
     * Book Reader Option: What writing style should be used, horizontal or vertical.
     */
    export enum bookReaderWritingStyle {
        '_0' = 0,
        '_1' = 1,
    }
    export enum bookReaderLayoutMode {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
    /**
     * Global Site Option: If the UI should layout items as Cards or List items
     */
    export enum globalPageLayoutMode {
        '_0' = 0,
        '_1' = 1,
    }
    /**
     * PDF Reader: Theme of the Reader
     */
    export enum pdfTheme {
        '_0' = 0,
        '_1' = 1,
    }
    /**
     * PDF Reader: Scroll mode of the reader
     */
    export enum pdfScrollMode {
        '_0' = 0,
        '_1' = 1,
        '_3' = 3,
    }
    /**
     * PDF Reader: Layout Mode of the reader
     */
    export enum pdfLayoutMode {
        '_0' = 0,
        '_2' = 2,
    }
    /**
     * PDF Reader: Spread Mode of the reader
     */
    export enum pdfSpreadMode {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

