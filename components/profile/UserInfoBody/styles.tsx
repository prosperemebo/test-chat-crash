import { nGRAY40 } from '@/theme/color'
import styled, { css } from 'styled-components/native'

interface UserProfileContentProps {
  card?: boolean
}

export const ScreenBody = styled.ScrollView`
  flex: 1;
`

export const UserProfileHeaderContent = styled.View`
  align-items: center;
  padding: 0 12px 20px;
`

export const UserProfileContent = styled.View<UserProfileContentProps>`
  background-color: ${props => props.theme.onboarding.gameEmptyIconColor};
  padding: 20px 15px;

  ${props => {
    if (props.card) {
      return css`
        background-color: ${props => props.theme.primaryBg};
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        border-width: 1px;
        border-color: ${nGRAY40};
        padding: 30px 20px 0px;
      `
    }
  }}
`

export const UserProfileSectionWrapper = styled.View`
  margin-bottom: 15px;
`