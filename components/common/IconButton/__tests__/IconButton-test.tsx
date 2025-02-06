import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import IconButton from '../'
import { dark } from '@/theme'

const testIcon = require('@/assets/images/notif_icon.png')

describe('<IconButton />', () => {

  test('IconButton renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <IconButton type="material" name='chevron-right' color={'#FFFFFF'} iconColor={'#000000'} disabled={true} padding={0} size={30}/>
        <IconButton name={'eye-outline'} blur={true} onPress={() => {}} disabled={false} type={'material'} />
        <IconButton type='image' source={testIcon} size={50} color={'#000000'} padding={17} disabled={true} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})