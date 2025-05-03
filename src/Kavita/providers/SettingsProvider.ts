import { Form } from "@paperback/types";
import { KavitaSettingsForm } from "../forms/KavitaSettingsForm";
import { KavitaExtension } from "../main";
import { ReadOnlyState, State } from "../utils/State";

export const apiUrlConfigKey = "kavitaApiUrl";
export const apiKeyConfigKey = "kavitaApiKey";

const jwtTokenConfigKey = "kavitaJwtToken";
const refresshTokenConfigKey = "kavitaRefreshToken";

export class SettingsProvider {
    private apiUrlState: State<string>;
    private apiKeyState: State<string>;
    private jwtTokenState: State<string>;
    private refreshTokenState: State<string>;
    extension: KavitaExtension;

    get ApiUrl(): ReadOnlyState<string> {
        return this.apiUrlState;
    }

    get ApiKey(): ReadOnlyState<string> {
        return this.apiKeyState;
    }

    get JwtToken(): State<string> {
        return this.jwtTokenState;
    }

    get RefreshToken(): State<string> {
        return this.refreshTokenState;
    }

    constructor(private ext: KavitaExtension) {
        this.extension = ext;

        this.apiUrlState = new State<string>(apiUrlConfigKey, "https://your-kavita-url.com");
        this.apiKeyState = new State<string>(apiKeyConfigKey, "your-kavita-api-key");
        this.jwtTokenState = new State<string>(jwtTokenConfigKey, "");
        this.refreshTokenState = new State<string>(refresshTokenConfigKey, "");
    }

    async getSettingsForm(): Promise<Form> {
        return new KavitaSettingsForm(this);
    }
}