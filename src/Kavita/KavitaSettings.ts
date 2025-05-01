import { ButtonRow, Form, InputRow, NavigationRow, Section } from "@paperback/types"
import { State } from "./utils/StateUtil";

export function getApiUrl(): string {
    return (
        (Application.getState("apiUrl") as string | undefined) ??
        "https://demo.kavita.com"
    )
}

export function getApiKey(): string {
    return (
        Application.getState("apiKey") as string | undefined ??
        "demo"
    )
}

export class KavitaSettingsForm extends Form {

    private url = new State<string>(this, "url", getApiUrl());
    private apiKey = new State<string>(this, "apiKey", getApiKey());

    getSections(): Application.FormSectionElement[] {
        const sections = [this.createMainSettingsSection()];
        return sections;
    }

    private createMainSettingsSection(): Application.FormSectionElement {
        return Section("mainSettings", [
            InputRow("kavitaApiUrl", {
                title: "Kavita API URL",
                value: this.url.value,
                onValueChange: this.url.updateValue,
            }),
            InputRow("kavitaApiKey", {
                title: "Kavita API Key",
                value: this.apiKey.value,
                onValueChange: this.apiKey.updateValue,
            }),
            ButtonRow("kavitaTestConnection", {
                title: "Test Connection",
                onSelect: async () => {

                }
            })
        ])
    }
}