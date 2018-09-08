module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coverageReporters: ['text-summary'],
  coveragePathIgnorePatterns: ['\\<rootDir>/src/(constants|messages|propTypes).+'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '<rootDir>/app/assets',
    '<rootDir>/config/',
    '<rootDir>/jest/',
    '<rootDir>/deployment/',
    '<rootDir>/lib/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
    '<rootDir>/spec/',
    '<rootDir>/tmp/',
    '<rootDir>/vendor/',
  ],
  modulePaths: ['<rootDir>/src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/config/setup-tests.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
