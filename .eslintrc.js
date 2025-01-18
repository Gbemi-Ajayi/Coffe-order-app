// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['pretttier', "react-native"],
  // ignorePatterns: ['/dist/*'],
  rules: {
    'prettier/prettier': 'error',
    "react-native/no-unused-styles": "error",
  }
};
