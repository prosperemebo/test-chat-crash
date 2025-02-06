import type { Config } from 'jest'

const config: Config = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '@/services/analytics': '<rootDir>/e2e/mocks/analyticMock.ts',
    '@/localization/i18n': '<rootDir>/e2e/mocks/i18next.ts',
    '@ptomasroos/react-native-multi-slider': '<rootDir>/e2e/mocks/multiSliderMock.tsx',
    'expo-modules-core/build/Refs': '<rootDir>/e2e/mocks/expoModulesMock.ts',
    'expo-modules-core/build/web/index.web': '<rootDir>/e2e/mocks/expoModulesWebMock.ts',
    'expo/build/winter': '<rootDir>/e2e/mocks/expoWinterMock.ts',
    'expo-router': '<rootDir>/e2e/mocks/expoRouterMock.ts',
  },
  setupFiles: [
    '<rootDir>/e2e/setup.js',
  ],
}

export default config