/* eslint-disable no-undef */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['**/*.unit.spec.ts', '**/?(*.)+(spec|test).ts'],
};
