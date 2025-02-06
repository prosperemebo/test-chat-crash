jest.mock('expo-modules-core', () => ({
  NativeModulesProxy: new Proxy({}, {
    get() {
      return jest.fn()
    },
  }),
  EventEmitter: jest.fn().mockImplementation(() => ({
    addListener: jest.fn(),
    removeListeners: jest.fn(),
  })),
  requireOptionalNativeModule: jest.fn(),
  requireNativeViewManager: jest.fn(),
  requireNativeModule: jest.fn(),
}))

jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  notificationAsync: jest.fn(),
  selectionAsync: jest.fn(),
  ImpactFeedbackStyle: {
    Light: 'light',
    Medium: 'medium',
    Heavy: 'heavy',
  },
  NotificationFeedbackType: {
    Success: 'success',
    Warning: 'warning',
    Error: 'error',
  },
}))

jest.mock('expo-image', () => ({
  Image: require('react-native').Image,
  ImageBackground: require('react-native').ImageBackground,
}))

jest.mock('expo-image-picker', () => ({
  launchImageLibraryAsync: jest.fn(() => Promise.resolve({ canceled: false, assets: [{ uri: 'mock-uri' }] })),
  launchCameraAsync: jest.fn(() => Promise.resolve({ canceled: false, assets: [{ uri: 'mock-uri' }] })),
  requestMediaLibraryPermissionsAsync: jest.fn(() => Promise.resolve({ granted: true })),
  requestCameraPermissionsAsync: jest.fn(() => Promise.resolve({ granted: true })),
}))

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn(obj => obj.ios),
}))

jest.mock('expo-font', () => ({
  isLoaded: jest.fn(() => true),
  loadAsync: jest.fn(),
  unloadAsync: jest.fn(),
  Font: {
    isLoaded: jest.fn(() => true),
    loadAsync: jest.fn(),
    unloadAsync: jest.fn(),
  },
}))

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: 'ViewManagerAdapter_ExpoLinearGradient',
}))

jest.mock('expo-blur', () => ({
  BlurView: 'ViewManagerAdapter_ExpoBlurView',
}))