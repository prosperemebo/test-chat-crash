import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import SubscriptionInfoBlock from '../'
import { dark } from '@/theme'

describe('<SubscriptionInfoBlock />', () => {

  test('SubscriptionInfoBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <SubscriptionInfoBlock from={'settings'} hasMembership={true}/>
        <SubscriptionInfoBlock from={'settings'} hasMembership={false}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})