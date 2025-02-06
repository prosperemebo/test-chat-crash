import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import SwitchInput from '../'
import { dark } from '@/theme'

describe('<SwitchInput />', () => {

  test('SwitchInput renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <SwitchInput value={true} type='settings' label={'etewtwetwet'} onValueChange={() => {}} disabled={false} isLoading={true}/>
        <SwitchInput value={true} type='settings' label={'etewtwetwet'} onValueChange={() => {}} disabled={true} isLoading={false}/>
        <SwitchInput value={true} type='settings' label={'etewtwetwet'} onValueChange={() => {}}/>
        <SwitchInput value={true} type='gdpr' label={'etewtwetwet'} onValueChange={() => {}}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})