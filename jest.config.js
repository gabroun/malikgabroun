module.exports = {
  //jest to transform all js/jsx in order to parse it
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  //the array will let you lost files that will be included before all test
  setupFiles: [`<rootDir>/loadershim.js`],
};
