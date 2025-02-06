import styled from 'styled-components/native'
import { Image as ExpoImage } from 'expo-image'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    paddingHorizontal: 21px;
`

export const ImageWrapper = styled.View`
    height: ${height * 0.35}px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const TextWrapper = styled.View``

export const Image = styled(ExpoImage)`
    height: ${height * 0.3}px;
    width: ${height * 0.3}px;
    resize-mode: contain;
`

export const Header = styled.Text`
    font-size: 20px;
    font-family: 'Poppins-Bold';
    color: ${props => props.theme.onboarding.headerTextColor};
    margin-vertical: 10px;
    text-align: center;
`

export const Description = styled.Text`
    color: ${props => props.theme.onboarding.headerTextColor};
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Poppins-Regular';
    width: ${width * 0.85}px;
`

export const SwitchWrapper = styled.View`
    background-color: ${props => props.theme.backgroundColor2};
    border-color: ${props => props.theme.inActiveBorderColor2};
    border-width: 1.5px;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    padding: 14px 16px;
`

export const CheckBoxWrapper = styled.View`
    margin-top: 20px;
    margin-bottom: 80px;
    flex-direction: row;
`