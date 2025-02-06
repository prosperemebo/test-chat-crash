import styled from 'styled-components/native'
import { PrimaryHeading } from '@/styles/typography'

interface TextProps {
  colorName: string
}

export const Container = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`

export const UserData = styled(PrimaryHeading) <TextProps>`
  font-size: 20px;
  color: ${props => (props.colorName ? props.colorName : props.theme.primaryTextColor)};
`