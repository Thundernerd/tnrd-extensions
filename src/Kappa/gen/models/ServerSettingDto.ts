/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SmtpConfigDto } from "./SmtpConfigDto";

export type ServerSettingDto = {
    cacheDirectory?: string | null;
    taskScan?: string | null;
    taskBackup?: string | null;
    taskCleanup?: string | null;
    /**
     * Logging level for server. Managed in appsettings.json.
     */
    loggingLevel?: string | null;
    /**
     * Port the server listens on. Managed in appsettings.json.
     */
    port?: number;
    /**
     * Comma separated list of ip addresses the server listens on. Managed in appsettings.json
     */
    ipAddresses?: string | null;
    /**
     * Allows anonymous information to be collected and sent to KavitaStats
     */
    allowStatCollection?: boolean;
    /**
     * Enables OPDS connections to be made to the server.
     */
    enableOpds?: boolean;
    /**
     * Base Url for the kavita. Requires restart to take effect.
     */
    baseUrl?: string | null;
    /**
     * Where Bookmarks are stored.
     */
    bookmarksDirectory?: string | null;
    installVersion?: string | null;
    /**
     * Represents a unique Id to this Kavita installation. Only used in Stats to identify unique installs.
     */
    installId?: string | null;
    /**
     * The format that should be used when saving media for Kavita
     */
    encodeMediaAs?: ServerSettingDto.encodeMediaAs;
    /**
     * The amount of Backups before cleanup
     */
    totalBackups?: number;
    /**
     * If Kavita should watch the library folders and process changes
     */
    enableFolderWatching?: boolean;
    /**
     * Total number of days worth of logs to keep at a given time.
     */
    totalLogs?: number;
    /**
     * The Host name (ie Reverse proxy domain name) for the server
     */
    hostName?: string | null;
    /**
     * The size in MB for Caching API data
     */
    cacheSize?: number;
    /**
     * How many Days since today in the past for reading progress, should content be considered for On Deck, before it gets removed automatically
     */
    onDeckProgressDays?: number;
    /**
     * How many Days since today in the past for chapter updates, should content be considered for On Deck, before it gets removed automatically
     */
    onDeckUpdateDays?: number;
    /**
     * How large the cover images should be
     */
    coverImageSize?: ServerSettingDto.coverImageSize;
    smtpConfig?: SmtpConfigDto;
    /**
     * The Date Kavita was first installed
     */
    firstInstallDate?: string | null;
    /**
     * The Version of Kavita on the first run
     */
    firstInstallVersion?: string | null;
};
export namespace ServerSettingDto {
    /**
     * The format that should be used when saving media for Kavita
     */
    export enum encodeMediaAs {
        "_0" = 0,
        "_1" = 1,
        "_2" = 2,
    }
    /**
     * How large the cover images should be
     */
    export enum coverImageSize {
        "_1" = 1,
        "_2" = 2,
        "_3" = 3,
        "_4" = 4,
    }
}
