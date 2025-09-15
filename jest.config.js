module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "HWGG/hwgg/lp7.js"
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};