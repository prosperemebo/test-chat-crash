import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import Button from '../'
import { dark } from '@/theme'

describe('<Button />', () => {

  test('Button renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <Button type="primary" title={'test button'} loading={false} onPress={() => {}} disabled={false}/>
        <Button type="primary" title={'test button'} loading={true} onPress={() => {}} disabled={false}/>
        <Button type="primary" title={'test button'} loading={false} onPress={() => {}} disabled={true}/>
        <Button type='primary' title={'test button'} loading={false} onPress={() => {}} disabled={false} withGradient/>
        <Button type='dark' title={'test button'} loading={false} onPress={() => {}} disabled={false}/>
        <Button type='yellow' title={'test button'} loading={false} onPress={() => {}} disabled={false}/>
        <Button type='login' title={'test button'} loading={false} onPress={() => {}} disabled={false}/>
        <Button type='empty' title={'test button'} loading={false} onPress={() => {}} disabled={false}/>
        <Button type='cancel' title={'test button'} loading={false} onPress={() => {}} disabled={false}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})