import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types";

export default {
    name: "Kappa",
    description: "Kavita extension for Paperback",
    version: "1.0.0",
    icon: "kappa.png",
    language: "🇬🇧",
    contentRating: ContentRating.EVERYONE,
    badges: [],
    capabilities:
        SourceIntents.MANGA_CHAPTERS |
        SourceIntents.DISCOVER_SECIONS |
        SourceIntents.SETTINGS_UI |
        SourceIntents.MANGA_SEARCH,
    developers: [
        {
            name: "Thundernerd",
            github: "Thundernerd",
            website: "https://github.com/Thundernerd",
        },
        {
            name: "Flaticon",
            website: "https://www.flaticon.com/free-icons/kappa"

        }
    ],
} satisfies SourceInfo;