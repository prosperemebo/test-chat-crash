export const Platform = {
  OS: 'web',
  select: jest.fn((options) => options.web),
}
  
export const DOMSerializer = {
  serializeElement: jest.fn(),
  deserializeElement: jest.fn(),
}
  
export const EventEmitter = jest.fn().mockImplementation(() => ({
  addListener: jest.fn(),
  removeListeners: jest.fn(),
}))
  
export default {
  Platform,
  DOMSerializer,
  EventEmitter,
}