import { Form } from "@paperback/types";
import { KavitaSettingsForm } from "../forms/KavitaSettingsForm";
import { KappaExtension } from "../main";
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

    constructor(public extension: KappaExtension) {
        this.apiUrlState = new State<string>(apiUrlConfigKey, "");
        this.apiKeyState = new State<string>(apiKeyConfigKey, "");
        this.jwtTokenState = new State<string>(jwtTokenConfigKey, "");
        this.refreshTokenState = new State<string>(refresshTokenConfigKey, "");
    }

    async getSettingsForm(): Promise<Form> {
        return new KavitaSettingsForm(this);
    }
}