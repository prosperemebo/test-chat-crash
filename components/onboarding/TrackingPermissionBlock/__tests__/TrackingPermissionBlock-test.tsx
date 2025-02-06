import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import TrackingPermissionBlock from '../'
import { dark } from '@/theme'

describe('<TrackingPermissionBlock />', () => {

  test('TrackingPermissionBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <TrackingPermissionBlock onCancel={() => {}} onAccept={() => {}}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})