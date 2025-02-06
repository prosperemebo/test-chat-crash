import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import GDPRBlock from '../'
import { dark } from '@/theme'

describe('<GDPRBlock />', () => {

  test('GDPRBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <GDPRBlock
          isLoading={false}
          isAgreedToTerms={false}
          onAgreedToTerms={() => {}}
        />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})