import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import ProgressButton from '../'
import { dark } from '@/theme'

describe('<ProgressButton />', () => {

  test('ProgressButton renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <ProgressButton onPress={() => {}} title={'123ew'} loading={false} disabled={true} />
        <ProgressButton onPress={() => {}} title={'325ff'} loading={true} disabled={false} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})