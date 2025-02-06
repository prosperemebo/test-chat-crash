import styled from 'styled-components/native'
import { Image } from 'expo-image'

export const StyledWrapper = styled.View`
    margin-top: 43px;
    margin-bottom: 31px;
    align-items: center;
    width: 100%;
`

export const StyledHeroWrapper = styled.View`
    margin-top: 20px;
    align-items: center;
    width: 100%;
`

export const StyledImage = styled(Image)`
    width: 120px;
    height: 102px;
`

export const StyledHeroImage = styled(Image)`
  width: 100%;
  height: 230px;
  align-self: center;
  resize-mode: contain;
  margin-bottom: 20px;
`