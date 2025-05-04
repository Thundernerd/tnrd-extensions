import { Form, LabelRow, Section, SourceManga } from "@paperback/types";
import { ProgressProvider } from "../providers/ProgressProvider";

export class KavitaProgressForm extends Form {
    constructor(
        private progressProvider: ProgressProvider,
        private sourceManga: SourceManga,
    ) {
        super();
    }

    getSections(): Application.FormSectionElement[] {
        return [this.getPlaceholderSection()];
    }

    private getPlaceholderSection(): Application.FormSectionElement {
        return Section("placeholderSection", [
            LabelRow("placeholderLabel", {
                title: "This has not been implemented yet!",
                subtitle: "Please come back later",
            }),
        ]);
    }
}
