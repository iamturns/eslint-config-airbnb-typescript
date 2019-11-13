const {
  rules: baseBestPracticesRules,
} = require("eslint-config-airbnb-base/rules/best-practices")
const {
  rules: baseErrorsRules,
} = require("eslint-config-airbnb-base/rules/errors")
const { rules: baseES6Rules } = require("eslint-config-airbnb-base/rules/es6")
const {
  rules: baseImportsRules,
} = require("eslint-config-airbnb-base/rules/imports")
const {
  rules: baseStyleRules,
} = require("eslint-config-airbnb-base/rules/style")
const {
  rules: baseVariablesRules,
} = require("eslint-config-airbnb-base/rules/variables")

module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    // Apply special parsing for TypeScript files
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".ts", ".json"],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    "import/extensions": [".js", ".ts", ".mjs"],
  },
  rules: {
    // Replace Airbnb 'brace-style' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    "brace-style": "off",
    "@typescript-eslint/brace-style": baseStyleRules["brace-style"],

    // Replace Airbnb 'camelcase' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    camelcase: "off",
    "@typescript-eslint/camelcase": baseStyleRules.camelcase,

    // Replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": baseStyleRules["func-call-spacing"],

    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: "off",
    "@typescript-eslint/indent": baseStyleRules.indent,

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor":
      baseStyleRules["no-array-constructor"],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function":
      baseBestPracticesRules["no-empty-function"],

    // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": baseErrorsRules["no-extra-parens"],

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers":
      baseBestPracticesRules["no-magic-numbers"],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions":
      baseBestPracticesRules["no-unused-expressions"],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": baseVariablesRules["no-unused-vars"],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define":
      baseVariablesRules["no-use-before-define"],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor":
      baseES6Rules["no-useless-constructor"],

    // Replace Airbnb 'quotes' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    quotes: "off",
    "@typescript-eslint/quotes": baseStyleRules.quotes,

    // Replace Airbnb 'semi' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    semi: "off",
    "@typescript-eslint/semi": baseStyleRules.semi,

    // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": [
      baseImportsRules["import/extensions"][0],
      baseImportsRules["import/extensions"][1],
      {
        ...baseImportsRules["import/extensions"][2],
        ts: "never",
        tsx: "never",
      },
    ],

    // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": [
      baseImportsRules["import/no-extraneous-dependencies"][0],
      {
        ...baseImportsRules["import/no-extraneous-dependencies"][1],
        devDependencies: baseImportsRules[
          "import/no-extraneous-dependencies"
        ][1].devDependencies.map(glob =>
          glob.replace("js,jsx", "js,jsx,ts,tsx"),
        ),
      },
    ],
  },
}
