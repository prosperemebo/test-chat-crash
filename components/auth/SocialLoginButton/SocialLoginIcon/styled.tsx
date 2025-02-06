import FontAwesome from '@expo/vector-icons/FontAwesome6'
import styled from 'styled-components/native'

export const Icon = styled(FontAwesome)`
  font-size: 20px;
  color: ${props => props.theme.auth.socialIconColor};
`