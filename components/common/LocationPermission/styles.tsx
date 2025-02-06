import styled from 'styled-components/native'
import { Image as ExpoImage } from 'expo-image'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Wrapper = styled.View``

export const ImageBlock = styled.View`
    height: ${height * 0.15}px;
    justify-content: center;
    align-items: center;
    margin-vertical: 60px;
`

export const Image = styled(ExpoImage)`
    height: ${height * 0.2}px;
    width: ${height * 0.2}px;
`

export const TextBlock = styled.View``

export const Header = styled.Text`
    font-size: 20px;
    font-family: 'Poppins-Bold';
    color: ${props => props.theme.onboarding.headerTextColor};
    margin-vertical: 10px;
    text-align: center;
`

export const Description = styled.Text`
    color: ${props => props.theme.common.serviceTextColor};
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Poppins-Regular';
    width: ${width * 0.85}px;
`

export const ButtonsBlock = styled.View`
    width: 100%;
    padding: 40px;
`