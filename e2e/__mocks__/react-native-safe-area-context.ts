import { jest } from '@jest/globals'

const inset = { top: 0, right: 0, bottom: 0, left: 0 }

module.exports =  {
  ...jest.requireActual('react-native-safe-area-context'),
  SafeAreaProvider: jest.fn(({ children }) => children),
  SafeAreaConsumer: jest.fn(({ children }) => children(inset)),
  useSafeAreaInsets: jest.fn(() => inset),
  useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 390, height: 844 })),
}