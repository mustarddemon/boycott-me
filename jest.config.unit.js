/**
 * Jest configuration for unit tests matching *.unit.spec.ts
 */
export default {
  displayName: 'unit',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.unit.spec.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
    },
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.unit.spec.ts'],
};
