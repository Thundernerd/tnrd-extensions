import { Form } from "@paperback/types";
import { KavitaSettingsForm } from "../KavitaSettings";

export class SettingsProvider {
    async getSettingsForm(): Promise<Form> {
        return new KavitaSettingsForm();
    }
}