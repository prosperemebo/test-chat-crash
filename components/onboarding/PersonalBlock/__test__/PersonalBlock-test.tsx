import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import PersonalBlock from '../'
import { dark } from '@/theme'

describe('<PersonalBlock />', () => {

  test('PersonalBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <PersonalBlock
          onUsernameChange={() => {}}
          onGenderChange={() => {}}
          onAgeVerifiedChange={() => {}}
          onBirthdayChange={() => {}}
          genderValue={'Male'}
          usernameValue={'test'}
          birthdayValue={'02/02/2020'}
          ageVerified={true}
          birthdayValidationError={'32523sdfsdf sdfsdfsdf'}
        />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})