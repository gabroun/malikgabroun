module.exports = {
  //jest to transform all js/jsx in order to parse it
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/fileMock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  //the array will let you lost files that will be included before all test
  setupFiles: [`<rootDir>/loadershim.js`],
};
