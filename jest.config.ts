import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets/index.js';

const config: Config = {
  preset: 'jest-preset-angular',
  ...createCjsPreset(), // remplace l'ancien preset: 'jest-preset-angular'
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverageFrom: ['src/app/**/*.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '\\.spec\\.ts$',
    '\\.mock\\.ts$',
    '\\.interface\\.ts$',
    '\\.module\\.ts$',
    'src/app/test-data/',
    'src/app/app\\.config\\.ts$',
    'src/app/app\\.routes\\.ts$',
    '\\.model\\.ts$',
  ],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@models/(.*)$': '<rootDir>/src/app/core/models/$1',
    '^@services/(.*)$': '<rootDir>/src/app/shared/services/$1',
    '^@assets/(.*)$': '<rootDir>/src/public/assets/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    '^@package$': '<rootDir>/package.json',
    '^@features/(.*)$': '<rootDir>/src/app/features/$1',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
} satisfies Config;

export default config;
