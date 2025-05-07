import { ButtonRow, Form, FormSectionElement, InputRow, LabelRow, Section } from "@paperback/types";
import {
    apiKeyConfigKey,
    apiUrlConfigKey,
    SettingsProvider,
} from "../providers/SettingsProvider";
import { FormState } from "../utils/FormState";

enum TestState {
    Undefined,
    Testing,
    Success,
    Failed,
}

export class KavitaSettingsForm extends Form {
    private testState: TestState = TestState.Undefined;

    settingsProvider: SettingsProvider;
    apiUrlState: FormState<string>;
    apiKeyState: FormState<string>;

    constructor(settingsProvider: SettingsProvider) {
        super();
        this.settingsProvider = settingsProvider;
        this.apiUrlState = new FormState<string>(
            this,
            apiUrlConfigKey,
            this.settingsProvider.ApiUrl.value,
        );
        this.apiKeyState = new FormState<string>(
            this,
            apiKeyConfigKey,
            this.settingsProvider.ApiKey.value,
        );
    }

    getSections(): FormSectionElement[] {
        const sections = [this.createConnectionSettings()];
        return sections;
    }

    private createConnectionSettings(): FormSectionElement {
        let testButtonTitle = "Test";
        switch (this.testState) {
            case TestState.Testing:
                testButtonTitle = "Testing...";
                break;
            case TestState.Success:
                testButtonTitle = "Success!";
                break;
            case TestState.Failed:
                testButtonTitle = "Failed!";
                break;
            default:
                testButtonTitle = "Test";
                break;
        }

        return Section("connectionSettings", [
            LabelRow("connectionSettingsLabel", {
                title: "Connection Settings",
                subtitle: "Configure your Kavita connection settings",
            }),
            InputRow("apiUrlInput", {
                title: "Kavita URL",
                value: this.apiUrlState.value,
                onValueChange: this.apiUrlState.selector,
            }),
            InputRow("apiKeyInput", {
                title: "Kavita API Key",
                value: this.apiKeyState.value,
                onValueChange: this.apiKeyState.selector,
            }),
            ButtonRow("testButton", {
                title: testButtonTitle,
                onSelect: Application.Selector(
                    this as KavitaSettingsForm,
                    "onTest",
                ),
            }),
        ]);
    }

    async onTest() {
        try {
            this.testState = TestState.Testing;
            this.reloadForm();
            await this.settingsProvider.extension.kavitaApi
                .testConnection()
                .then(async () => {
                    this.testState = TestState.Success;
                    this.reloadForm();
                })
                .catch((error: Error) => {
                    this.testState = TestState.Failed;
                    this.reloadForm();
                    throw error;
                });
        } catch (error) {
            this.testState = TestState.Failed;
            this.reloadForm();
            throw error;
        }
    }
}
