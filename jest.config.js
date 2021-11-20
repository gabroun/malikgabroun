module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|pdf|m4a|aac|oga)$": `<rootDir>/tests/__mocks__/fileMock.js`,
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@static(.*)$": "<rootDir>/static$1",
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>/cypress/`,
  ],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setup-test-env.js"],
};
