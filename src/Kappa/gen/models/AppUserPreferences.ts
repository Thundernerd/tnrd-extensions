/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppUser } from "./AppUser";
import type { SiteTheme } from "./SiteTheme";

export type AppUserPreferences = {
    id?: number;
    /**
     * Manga Reader Option: What direction should the next/prev page buttons go
     */
    readingDirection?: AppUserPreferences.readingDirection;
    /**
     * Manga Reader Option: How should the image be scaled to screen
     */
    scalingOption?: AppUserPreferences.scalingOption;
    /**
     * Manga Reader Option: Which side of a split image should we show first
     */
    pageSplitOption?: AppUserPreferences.pageSplitOption;
    /**
     * Manga Reader Option: How the manga reader should perform paging or reading of the file
     * <example>
     * Webtoon uses scrolling to page, MANGA_LR uses paging by clicking left/right side of reader, MANGA_UD uses paging
     * by clicking top/bottom sides of reader.
     * </example>
     */
    readerMode?: AppUserPreferences.readerMode;
    /**
     * Manga Reader Option: Allow the menu to close after 6 seconds without interaction
     */
    autoCloseMenu?: boolean;
    /**
     * Manga Reader Option: Show screen hints to the user on some actions, ie) pagination direction change
     */
    showScreenHints?: boolean;
    /**
     * Manga Reader Option: Emulate a book by applying a shadow effect on the pages
     */
    emulateBook?: boolean;
    /**
     * Manga Reader Option: How many pages to display in the reader at once
     */
    layoutMode?: AppUserPreferences.layoutMode;
    /**
     * Manga Reader Option: Background color of the reader
     */
    backgroundColor?: string | null;
    /**
     * Manga Reader Option: Should swiping trigger pagination
     */
    swipeToPaginate?: boolean;
    /**
     * Manga Reader Option: Allow Automatic Webtoon detection
     */
    allowAutomaticWebtoonReaderDetection?: boolean;
    /**
     * Book Reader Option: Override extra Margin
     */
    bookReaderMargin?: number;
    /**
     * Book Reader Option: Override line-height
     */
    bookReaderLineSpacing?: number;
    /**
     * Book Reader Option: Override font size
     */
    bookReaderFontSize?: number;
    /**
     * Book Reader Option: Maps to the default Kavita font-family (inherit) or an override
     */
    bookReaderFontFamily?: string | null;
    /**
     * Book Reader Option: Allows tapping on side of screens to paginate
     */
    bookReaderTapToPaginate?: boolean;
    /**
     * Book Reader Option: What direction should the next/prev page buttons go
     */
    bookReaderReadingDirection?: AppUserPreferences.bookReaderReadingDirection;
    /**
     * Book Reader Option: Defines the writing styles vertical/horizontal
     */
    bookReaderWritingStyle?: AppUserPreferences.bookReaderWritingStyle;
    /**
     * Book Reader Option: The color theme to decorate the book contents
     */
    bookThemeName?: string | null;
    /**
     * Book Reader Option: The way a page from a book is rendered. Default is as book dictates, 1 column is fit to height,
     * 2 column is fit to height, 2 columns
     */
    bookReaderLayoutMode?: AppUserPreferences.bookReaderLayoutMode;
    /**
     * Book Reader Option: A flag that hides the menu-ing system behind a click on the screen. This should be used with tap to paginate, but the app doesn't enforce this.
     */
    bookReaderImmersiveMode?: boolean;
    /**
     * PDF Reader: Theme of the Reader
     */
    pdfTheme?: AppUserPreferences.pdfTheme;
    /**
     * PDF Reader: Scroll mode of the reader
     */
    pdfScrollMode?: AppUserPreferences.pdfScrollMode;
    /**
     * PDF Reader: Spread Mode of the reader
     */
    pdfSpreadMode?: AppUserPreferences.pdfSpreadMode;
    theme: SiteTheme;
    /**
     * Global Site Option: If the UI should layout items as Cards or List items
     */
    globalPageLayoutMode?: AppUserPreferences.globalPageLayoutMode;
    /**
     * UI Site Global Setting: If unread summaries should be blurred until expanded or unless user has read it already
     */
    blurUnreadSummaries?: boolean;
    /**
     * UI Site Global Setting: Should Kavita prompt user to confirm downloads that are greater than 100 MB.
     */
    promptForDownloadSize?: boolean;
    /**
     * UI Site Global Setting: Should Kavita disable CSS transitions
     */
    noTransitions?: boolean;
    /**
     * UI Site Global Setting: When showing series, only parent series or series with no relationships will be returned
     */
    collapseSeriesRelationships?: boolean;
    /**
     * UI Site Global Setting: Should series reviews be shared with all users in the server
     */
    shareReviews?: boolean;
    /**
     * UI Site Global Setting: The language locale that should be used for the user
     */
    locale?: string | null;
    /**
     * Should this account have Scrobbling enabled for AniList
     */
    aniListScrobblingEnabled?: boolean;
    /**
     * Should this account have Want to Read Sync enabled
     */
    wantToReadSync?: boolean;
    appUser?: AppUser;
    appUserId?: number;
};
export namespace AppUserPreferences {
    /**
     * Manga Reader Option: What direction should the next/prev page buttons go
     */
    export enum readingDirection {
        "_0" = 0,
        "_1" = 1,
    }
    /**
     * Manga Reader Option: How should the image be scaled to screen
     */
    export enum scalingOption {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
    }
    /**
     * Manga Reader Option: Which side of a split image should we show first
     */
    export enum pageSplitOption {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
    }
    /**
     * Manga Reader Option: How the manga reader should perform paging or reading of the file
     * <example>
     * Webtoon uses scrolling to page, MANGA_LR uses paging by clicking left/right side of reader, MANGA_UD uses paging
     * by clicking top/bottom sides of reader.
     * </example>
     */
    export enum readerMode {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
    }
    /**
     * Manga Reader Option: How many pages to display in the reader at once
     */
    export enum layoutMode {
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
    }
    /**
     * Book Reader Option: What direction should the next/prev page buttons go
     */
    export enum bookReaderReadingDirection {
        "_0" = 0,
        "_1" = 1,
    }
    /**
     * Book Reader Option: Defines the writing styles vertical/horizontal
     */
    export enum bookReaderWritingStyle {
        "_0" = 0,
        "_1" = 1,
    }
    /**
     * Book Reader Option: The way a page from a book is rendered. Default is as book dictates, 1 column is fit to height,
     * 2 column is fit to height, 2 columns
     */
    export enum bookReaderLayoutMode {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
    }
    /**
     * PDF Reader: Theme of the Reader
     */
    export enum pdfTheme {
        "_0" = 0,
        "_1" = 1,
    }
    /**
     * PDF Reader: Scroll mode of the reader
     */
    export enum pdfScrollMode {
        "_0" = 0,
        "_1" = 1,
        "_3" = 3,
    }
    /**
     * PDF Reader: Spread Mode of the reader
     */
    export enum pdfSpreadMode {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
    }
    /**
     * Global Site Option: If the UI should layout items as Cards or List items
     */
    export enum globalPageLayoutMode {
        "_0" = 0,
        "_1" = 1,
    }
}
