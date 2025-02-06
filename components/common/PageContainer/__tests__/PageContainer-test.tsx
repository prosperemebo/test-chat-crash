import { render } from '@testing-library/react-native'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test, jest } from '@jest/globals'
import PageContainer from '../'
import { dark } from '@/theme'

describe('<PageContainer />', () => {

  jest.mock('react-native-safe-area-context')

  test('PageContainer container renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <PageContainer>
          <View></View>
        </PageContainer>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})