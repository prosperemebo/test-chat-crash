import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import Input from '../'
import { dark } from '@/theme'

describe('<Input />', () => {

  test('Input renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <Input type='general' value={'234'} placeholder={'Test test'} iconName={'key'}/>
        <Input type='general' value={'234'} placeholder={'Test test'} error={'34758dshfgjkbsdjbsd'}/>
        <Input type='general' value={'234'} placeholder={'Test test'}/>
        <Input type='username' value={'234'} placeholder={'Test test'}/>
        <Input type='email' value={'234'} placeholder={'Test test'}/>
        <Input type='password' value={'234'} placeholder={'Test test'}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})