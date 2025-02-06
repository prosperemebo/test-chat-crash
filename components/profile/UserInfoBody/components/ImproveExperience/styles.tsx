import styled from 'styled-components/native'
import { SecondaryHeading } from '@/components/common'

type ButtonWrapperType = {
  size: number
}

export const ImproveRecommendationBannerWrapper = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${props => props.theme.profile.improveBannerBackgroundColor};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`

export const ImproveRecommendationBannerTitle = styled(SecondaryHeading)`
  text-transform: capitalize;
  letter-spacing: 0;
  font-size: 16px;
  color: ${props => props.theme.profile.improveBannerTitleColor};
  margin-left: 10px;
  flex: 1;
  line-height: 20px;
`

export const ButtonWrapper = styled.View<ButtonWrapperType>`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`
