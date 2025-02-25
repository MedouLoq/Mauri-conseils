/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ["en", "fr"], // Add other locales as needed
    sourceLocale: "en",
    catalogs: [
        {
            path: "src/locales/{locale}/messages",
            include: ["src"],
        },
    ],
    format: "po", // You can also use "json" if you prefer
};
