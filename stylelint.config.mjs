/** @type {import('stylelint').Config} */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-vue",
        "stylelint-config-tailwindcss",
    ],
    plugins: ["@stylistic/stylelint-plugin"],
    rules: {
        "@stylistic/indentation": 4,
        "hue-degree-notation": null,
        "lightness-notation": null,
    },
}
