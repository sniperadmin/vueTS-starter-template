module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots:['<rootDir>/tests/unit'],
  setupFiles: ['<rootDir>/tests/unit/jest.setup.ts'],
  modulePaths: [
    '<rootDir>',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  globals: {
    'ts-jest': {
      babelConfig: './babel.config.js',
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'vue'],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  transformIgnorePatterns: ['node_modules'],
  testRegex: '(/tests/unit/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/tests/unit/jest.setup.ts',
    // '<rootDir>/tests/unit/mocks',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // "^~/(.*)$": "<rootDir>/src/$1",
    '^vue$': 'vue/dist/vue.common.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{vue,ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
  coveragePathIgnorePatterns: ['node_modules'],
};
