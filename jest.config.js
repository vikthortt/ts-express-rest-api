process.env = Object.assign(process.env, { LOG_ENABLED: 'false' });

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{ts,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**',
    '!**/webpack.config.js',
    '!**/copyStaticAssets.ts',
    '!**/src/index.ts',
    '!**/src/types/**',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
  },
};
