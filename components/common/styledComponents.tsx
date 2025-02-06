import { TertiaryHeading } from '@/styles/typography';
import { GRAY45 } from '@/theme/color';
import { Dimensions } from 'react-native';
import { Image, ImageBackground } from 'expo-image';
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

type SectionWrapperType = {
  marginBottom?: string;
}

type PrimaryHeadingType = {
  color?: string
  textAlign?: string
  align?: string
  textTransform?: string
}

type SecondaryHeadingType = {
  color?: string
  textAlign?: string
  align?: string
  textTransform?: string
}

type HeaderHeadingType = {
  textTransform?: string;
} & SecondaryHeadingType

type InfoTextType = {
  color?: string
  fontSize?: string
}

type NoticeType = {
  marginTop?: number
}

type CenterWrapperType = {
  backgroundColor?: string
}

export const MainBackground = styled.View`
  background-color: ${props => props.theme.primaryBg};
  flex: 1;
`

export const Container = styled.View`
    flex: 1;
    paddingHorizontal: 21px;
    align-items: center;
`

type ContentType = {
  stretch?: boolean
}

type IoniconType = {
  iconColor?: string
  label?: string
}

const { width: screenWidth } = Dimensions.get('window')

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 21,
    alignItems: 'center',
  },
}))`
`

export const ScreenBody = styled.ScrollView`
  flex: 1;
  padding: 20px;
`

export const CenterWrapper = styled.View<CenterWrapperType>`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor ?? 'transparent'};
`

export const PrimaryHeading = styled.Text<PrimaryHeadingType>`
  color: ${props => props.color || props.theme.common.inputTextColor};
  text-align: ${props => props.textAlign || 'left'};
  font-size: 18px;
  font-style: normal;
  font-family: 'Poppins-Bold';
`

export const PrimaryHeadingLarge = styled(PrimaryHeading)`
  font-size: 20px;
`

export const SecondaryHeading = styled.Text<SecondaryHeadingType>`
  color: ${props => props.color || props.theme.common.inputTextColor};
  text-align: ${props => props.textAlign || props.align || 'left'};
  font-size: 13px;
  font-style: normal;
  letter-spacing: 1.2px;
  text-transform: ${props => props.textTransform || 'uppercase'};
  font-family: 'Poppins-Bold';
`

export const ActivityIndicator = styled.ActivityIndicator``

export const Title = styled.Text`
    color: ${props => props.theme.common.inputTextColor};
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    font-family: 'Poppins-Regular';
`

export const SectionWrapper = styled.View<SectionWrapperType>`
  margin-bottom: ${props => props.marginBottom || '30px'};
`

export const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled.View<ContentType>`
  margin: 10px 0;
  width: ${props => (props.stretch ? `${screenWidth - 20}px` : 'auto')};
`

export const HeaderPrefix = styled.View`
  flex-direction: row;
`

export const InfoText = styled.Text<InfoTextType>`
  color: ${props => props.color || props.theme.common.infoTextColor};
  font-size: ${props => props.fontSize || '13px'};
  font-style: normal;
  font-family: 'Poppins-Regular';
  font-weight: 300;
  line-height: 22px;
`

export const HeaderHeading = styled(SecondaryHeading) <HeaderHeadingType>`
  margin-right: 5px;
  text-transform: ${props => props.textTransform || 'uppercase'};
`

export const HeaderHeadingTertiary = styled(TertiaryHeading)`
  color: ${GRAY45};
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.78px;
`

export const Ionicon = styled(Ionicons) <IoniconType>`
  color: ${props => props.iconColor || GRAY45};
  font-size: ${props => props.size || '18'}px;
  margin-right: ${props => (props.label ? '5px' : '0px')};
  margin-right: 8px;
`

export const Notice = styled.Text<NoticeType>`
    color: ${(props) => props.theme.auth.noticeText};
    text-align: center;
    line-height: 20px;
    letter-spacing: 0.3px;
    min-height: 40px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
`

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  background-color: ${props => props.theme.profile.backgroundColor};
`

export const SplashScreenContent = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const SplashLogo = styled(Image)`
    width: 180px;
    height: 180px;
    margin-bottom: 30px;
`
