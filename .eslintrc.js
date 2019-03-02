module.exports = {
  extends: ["airbnb"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "camelcase": 0,
    "comma-dangle": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "linebreak-style": 0,
    "import/no-cycle": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/no-useless-path-segments": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    "no-console": 0,
    "no-multi-spaces": 0,
    "no-plusplus": 0,
    "no-restricted-globals": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "object-curly-newline": 0,
    "quotes": ["error", "double"],
    "react/forbid-prop-types": 0,
    "react/jsx-closing-tag-location": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-danger": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "semi": 0,
  },
  parser: "babel-eslint",
  globals: {
    alert: "readonly",
    document: "readonly",
    fetch: "readonly",
    FormData: "readonly",
    graphql: "readonly",
    localStorage: "readonly",
    location: "readonly",
    navigator: "readonly",
    Notification: "readonly",
    window: "readonly",
    __PATH_PREFIX__: true,
  },
}