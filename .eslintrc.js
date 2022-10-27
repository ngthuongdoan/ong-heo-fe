module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "react/react-in-jsx-scope": "off",
    camelcase: "error",
    "spaced-comment": "error",
    "no-duplicate-imports": "error",
  },
}
