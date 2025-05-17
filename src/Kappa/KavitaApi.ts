import { Request, Response } from "@paperback/types";
import {
    ChapterDto,
    LibraryDto,
    ProgressDto,
    RecentlyAddedItemDto,
    SearchResultGroupDto,
    SeriesDto,
    SeriesMetadataDto,
    TokenRequestDto,
    UserDto,
    VolumeDto,
} from "./gen";
import { KappaExtension } from "./main";
import { URLBuilder } from "./utils/URLBuilder";

interface JWTData {
    exp: number;
}

export class KavitaApi {
    constructor(private extension: KappaExtension) {}

    private createUrlBuilder(): URLBuilder {
        return new URLBuilder(
            this.extension.settingsProvider.ApiUrl.value,
        ).addPath("api");
    }

    async testConnection(): Promise<void> {
        try {
            return this.authenticate()
                .then(() => {
                    return Promise.resolve();
                })
                .catch((error) => {
                    return Promise.reject(
                        new Error("Failed to test connection", {
                            cause: error,
                        }),
                    );
                });
        } catch (error) {
            return Promise.reject(
                new Error("Failed to test connection", {
                    cause: error,
                }),
            );
        }
    }

    async search(query: string): Promise<SearchResultGroupDto | undefined> {
        try {
            console.log("Searching for: " + query);
            const [, dto] = await this.sendRequest<SearchResultGroupDto>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("Search")
                    .addPath("search")
                    .addQuery("queryString", query)
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to search", {
                    cause: error,
                }),
            );
        }
    }

    async getMangaDetails(mangaId: string): Promise<SeriesDto | undefined> {
        try {
            const [, dto] = await this.sendRequest<SeriesDto>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath(mangaId)
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get manga details", {
                    cause: error,
                }),
            );
        }
    }

    async getMangaMetadata(
        mangaId: string,
    ): Promise<SeriesMetadataDto | undefined> {
        try {
            const [, dto] = await this.sendRequest<SeriesMetadataDto>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath("metadata")
                    .addQuery("seriesId", mangaId)
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get manga metadata", {
                    cause: error,
                }),
            );
        }
    }

    async getMangaVolumes(mangaId: string): Promise<VolumeDto[] | undefined> {
        try {
            const [, dto] = await this.sendRequest<VolumeDto[]>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath("volumes")
                    .addQuery("seriesId", mangaId)
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get manga volumes", {
                    cause: error,
                }),
            );
        }
    }

    async getChapterDetails(
        chapterId: string,
    ): Promise<ChapterDto | undefined> {
        try {
            const [, dto] = await this.sendRequest<ChapterDto>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath("chapter")
                    .addQuery("chapterId", chapterId)
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get chapter details", {
                    cause: error,
                }),
            );
        }
    }

    async getOnDeck(): Promise<SeriesDto[] | undefined> {
        try {
            const [, dto] = await this.sendRequest<SeriesDto[]>({
                method: "POST",
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath("on-deck")
                    .addQuery("PageNumber", "1")
                    .addQuery("PageSize", "10")
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get on deck", {
                    cause: error,
                }),
            );
        }
    }

    async getRecentlyUpdated(): Promise<RecentlyAddedItemDto[] | undefined> {
        try {
            const [, dto] = await this.sendRequest<RecentlyAddedItemDto[]>({
                method: "POST",
                body: {},
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath("recently-updated-series")
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get recently updated", {
                    cause: error,
                }),
            );
        }
    }

    async getNewlyAdded(): Promise<SeriesDto[] | undefined> {
        try {
            const [, dto] = await this.sendRequest<SeriesDto[]>({
                method: "POST",
                body: {},
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath("recently-added-v2")
                    .addQuery("PageNumber", "1")
                    .addQuery("PageSize", "10")
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get newly added", {
                    cause: error,
                }),
            );
        }
    }

    async getLibraries(): Promise<LibraryDto[] | undefined> {
        try {
            const [, dto] = await this.sendRequest<LibraryDto[]>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("Library")
                    .addPath("libraries")
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get libraries", {
                    cause: error,
                }),
            );
        }
    }

    async getLibrary(libraryId: string): Promise<LibraryDto | undefined> {
        try {
            const [, dto] = await this.sendRequest<LibraryDto>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("Library")
                    .addPath("library")
                    .addQuery("libraryId", libraryId)
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get library", {
                    cause: error,
                }),
            );
        }
    }

    async getAllSeries(libraryId: string): Promise<SeriesDto[] | undefined> {
        try {
            const [, dto] = await this.sendRequest<SeriesDto[]>({
                method: "POST",
                body: {},
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                url: this.createUrlBuilder()
                    .addPath("Series")
                    .addPath("all")
                    .addQuery("PageNumber", "1")
                    .addQuery("libraryId", libraryId)
                    .build(),
            });

            return Promise.resolve(dto);
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get all series", {
                    cause: error,
                }),
            );
        }
    }

    async getContinuePoint(mangaId: string): Promise<ChapterDto | undefined> {
        try {
            const [, dto] = await this.sendRequest<ChapterDto>({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("reader")
                    .addPath("continue-point")
                    .addQuery("seriesId", mangaId)
                    .build(),
            });

            return dto;
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get continue point", {
                    cause: error,
                }),
            );
        }
    }

    async getHasProgress(mangaId: string): Promise<boolean | undefined> {
        try {
            const [, content] = await this.sendPlainTextRequest({
                method: "GET",
                url: this.createUrlBuilder()
                    .addPath("reader")
                    .addPath("has-progress")
                    .addQuery("seriesId", mangaId)
                    .build(),
            });

            return content === "true" ? true : false;
        } catch (error) {
            return Promise.reject(
                new Error("Failed to get has progress", {
                    cause: error,
                }),
            );
        }
    }

    async setProgress(data: ProgressDto): Promise<boolean> {
        try {
            const [response] = await this.sendPlainTextRequest({
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                url: this.createUrlBuilder()
                    .addPath("reader")
                    .addPath("progress")
                    .build(),
            });

            if (response.status !== 200) {
                console.log(
                    `Failed to set progress, status code: ${response.status}`,
                );
                return Promise.reject(
                    new Error(
                        "Failed to set progress, status code: " +
                            response.status,
                    ),
                );
            }

            return true;
        } catch (error) {
            console.log(
                `Failed to set progress: ${String(error)}; Data: ${JSON.stringify(data)}`,
            );
            return Promise.reject(
                new Error("Failed to set progress", {
                    cause: error,
                }),
            );
        }
    }

    private async authenticate(): Promise<void> {
        try {
            const [response, buffer] = await Application.scheduleRequest({
                method: "POST",
                url: this.createUrlBuilder()
                    .addPath("Plugin")
                    .addPath("authenticate")
                    .addQuery(
                        "apiKey",
                        this.extension.settingsProvider.ApiKey.value,
                    )
                    .addQuery("pluginName", "KappaPaperback")
                    .build(),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (response.status !== 200) {
                return Promise.reject(
                    new Error(
                        "Failed to authenticate with Kavita API: " +
                            response.status,
                    ),
                );
            }

            const content = Application.arrayBufferToUTF8String(buffer);
            const dto = JSON.parse(content) as UserDto;

            if (!dto) {
                return Promise.reject(
                    new Error("Failed to parse response from Kavita API"),
                );
            }

            if (!dto.token || !dto.refreshToken) {
                return Promise.reject(
                    new Error("Invalid response from Kavita API"),
                );
            }

            this.extension.settingsProvider.JwtToken.updateValue(dto.token);
            this.extension.settingsProvider.RefreshToken.updateValue(
                dto.refreshToken,
            );
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(
                new Error("Failed to authenticate", {
                    cause: error,
                }),
            );
        }
    }

    private async refreshToken(): Promise<void> {
        try {
            return this.sendRequest<TokenRequestDto>(
                {
                    method: "POST",
                    url: this.createUrlBuilder()
                        .addPath("Account")
                        .addPath("refresh-token")
                        .build(),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: {
                        token: this.extension.settingsProvider.JwtToken.value,
                        refreshToken:
                            this.extension.settingsProvider.RefreshToken.value,
                    },
                },
                false,
            )
                .then(([response, dto]) => {
                    if (response.status !== 200) {
                        return this.authenticate();
                    }

                    if (dto === undefined) {
                        return Promise.reject(
                            new Error(
                                "Failed to parse response from Kavita API",
                            ),
                        );
                    }

                    if (!dto.token || !dto.refreshToken) {
                        return Promise.reject(
                            new Error("Invalid response from Kavita API"),
                        );
                    }

                    this.extension.settingsProvider.JwtToken.updateValue(
                        dto.token,
                    );
                    this.extension.settingsProvider.RefreshToken.updateValue(
                        dto.refreshToken,
                    );
                    return Promise.resolve();
                })
                .catch((error) => {
                    return Promise.reject(
                        new Error("Failed to refresh token", {
                            cause: error,
                        }),
                    );
                });
        } catch (error) {
            return Promise.reject(
                new Error("Failed to refresh token", {
                    cause: error,
                }),
            );
        }
    }

    private createAuthRequest(request: Request, withAuth = true): Request {
        return {
            method: request.method,
            url: request.url,
            body: request.body,
            cookies: request.cookies,
            headers: {
                ...request.headers,
                ...(withAuth
                    ? {
                          Authorization: `Bearer ${this.extension.settingsProvider.JwtToken.value}`,
                      }
                    : {}),
            },
        };
    }

    private needsAuth(): boolean {
        return (
            this.extension.settingsProvider.JwtToken.value === undefined ||
            this.extension.settingsProvider.JwtToken.value === ""
        );
    }

    private needsRefresh(): boolean {
        if (
            this.extension.settingsProvider.JwtToken.value === undefined ||
            this.extension.settingsProvider.JwtToken.value === "" ||
            this.extension.settingsProvider.RefreshToken.value === undefined ||
            this.extension.settingsProvider.RefreshToken.value === ""
        ) {
            return false; // Return false here because we don't need to refresh if we don't have a token
        }

        const splits =
            this.extension.settingsProvider.JwtToken.value.split(".");
        if (splits === undefined) {
            return true;
        }

        if (splits.length !== 3) {
            return true;
        }

        const payload = this.decodeBase64Url(splits[1]);
        if (payload === undefined) {
            return true;
        }

        const json = payload.toString("utf8");
        if (json === undefined) {
            return true;
        }

        const decoded = JSON.parse(json) as JWTData;
        if (decoded === undefined) {
            return true;
        }

        if (decoded.exp === undefined) {
            return true;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime >= decoded.exp) {
            return true;
        }

        return false;
    }

    private decodeBase64Url(base64url: string): Buffer {
        const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");

        return Buffer.from(base64, "base64");
    }

    private async sendPlainTextRequest(
        request: Request,
        withAuth = true,
    ): Promise<[Response, string | undefined]> {
        try {
            if (withAuth && this.needsRefresh()) {
                console.log("Token needs refresh, refreshing...");
                await this.refreshToken();
            }

            if (withAuth && this.needsAuth()) {
                console.log("No auth token, authenticating...");
                await this.authenticate();
            }

            const authRequest = this.createAuthRequest(request, withAuth);
            const [response, buffer] =
                await Application.scheduleRequest(authRequest);
            if (response.status === 401) {
                // Have an expired token even though we checked before if we should refresh
                throw Error("Token expired");
            }

            if (response.status !== 200) {
                console.log("Failed with status code: " + response.status);
                return [response, undefined];
            }

            const content = Application.arrayBufferToUTF8String(buffer);
            return [response, content];
        } catch (error) {
            return Promise.reject(
                new Error("Failed to send request", {
                    cause: error,
                }),
            );
        }
    }

    private async sendRequest<T>(
        request: Request,
        withAuth = true,
    ): Promise<[Response, T | undefined]> {
        try {
            if (withAuth && this.needsRefresh()) {
                console.log("Token needs refresh, refreshing...");
                await this.refreshToken();
            }

            if (withAuth && this.needsAuth()) {
                console.log("No auth token, authenticating...");
                await this.authenticate();
            }

            const authRequest = this.createAuthRequest(request, withAuth);
            const [response, buffer] =
                await Application.scheduleRequest(authRequest);
            if (response.status === 401) {
                // Have an expired token even though we checked before if we should refresh
                throw Error("Token expired");
            }

            if (response.status !== 200) {
                console.log("Failed with status code: " + response.status);
                return [response, undefined];
            }

            const content = Application.arrayBufferToUTF8String(buffer);
            const dto = JSON.parse(content) as T;
            if (!dto) {
                console.log("Failed to parse");
                return [response, undefined];
            }

            return [response, dto];
        } catch (error) {
            return Promise.reject(
                new Error("Failed to send request", {
                    cause: error,
                }),
            );
        }
    }
}
