export const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  canGoBack: jest.fn(() => true),
}))
  
export const Href = jest.fn()
  
export default {
  useRouter,
  Href,
}