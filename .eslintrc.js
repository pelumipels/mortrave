module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
    sourceType: 'module', // Indicates ESM
    },
    // Your ESLint rules and configuration here
    "extends": [
        // ...
        "plugin:react-hooks/recommended"
    ],
    "plugins": [
        // ...
        "react-hooks"
    ],
    "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/exhaustive-deps": ["warn", {
            "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
        }]
    }
};