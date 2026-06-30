import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets/index.js';

const config: Config = {
  preset: 'jest-preset-angular',
  ...createCjsPreset(), // remplace l'ancien preset: 'jest-preset-angular'
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
} satisfies Config;

export default config;
