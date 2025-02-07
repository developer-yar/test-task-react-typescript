const ESLintPluginImport = require("eslint-plugin-import");
const ESLintPluginPrettier = require("eslint-plugin-prettier");
const ESLintPluginTypeScript = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: require("@typescript-eslint/parser"),
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.nodeBuiltin,
      },
      parserOptions: { project: "./tsconfig.json" },
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": ESLintPluginTypeScript,
      import: ESLintPluginImport,
      prettier: ESLintPluginPrettier,
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "no-undef": "error",
      eqeqeq: "error",

      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",

      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "error",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          named: true,
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
      "prettier/prettier": "error",
    },
  },
];
