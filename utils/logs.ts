import { LogBox } from 'react-native'
const ignoredWarnings = [
  'Require cycle',
  'Expected style "borderWidth: 0.3333333333333333" to contain units',
]
LogBox.ignoreLogs(ignoredWarnings)

const init = () => {
  if (__DEV__) {

    const checkIfLogIsIgnored = (itemToCheck: any) => {
      if (typeof itemToCheck !== 'string') return true

      return !ignoredWarnings.some(log => itemToCheck.startsWith(log))
    }

    const filterIgnoredMessages =
      // @ts-ignore
      (logger): ((...args: any[]) => void) =>
        (...args): void => {
          const isOk = checkIfLogIsIgnored(args[0])

          if (isOk) {
            logger(...args)
          }
        }

    // eslint-disable-next-line no-console
    console.log = filterIgnoredMessages(console.log)
    // eslint-disable-next-line no-console
    console.info = filterIgnoredMessages(console.info)
    console.warn = filterIgnoredMessages(console.warn)
    console.error = filterIgnoredMessages(console.error)
  }
}

init()