import styled from 'styled-components/native'
import { Animated } from 'react-native'


export const Container = styled(Animated.View)`
  flex: 1;
  margin-top: auto;
  margin-bottom: 0;
  background-color: ${props => props.theme.secondaryBg};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  max-height: 85%;
`

export const DragAreaContainer = styled(Animated.View)`
  width: 100%;
  height: 25px;
  background-color: ${props => props.theme.common.borderColor};
  position: relative;
`

export const DragArea = styled.View`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  z-index: 1;
`

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%
`

export const ModalContainer = styled.View`
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.common.borderColor};
  padding-vertical: 16px;
  padding-horizontal: 12px;
    
`

export const CancelButton = styled.Text`
  color: ${props => props.theme.common.gradientButtonColorStart};
  font-size: 16px;
`

export const Title = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.common.serviceTextColor};
  text-align: center;
`

export const Label = styled.Text`
  color: ${props => props.theme.common.labelColor};
  font-size: 18px;
  margin-vertical: 6px;
`

export const FilterContainer = styled.View`
  flex: 1;
  padding-horizontal: 12px;
    
`

export const AgeHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const AgeText = styled.Text`
  color: ${props => props.theme.common.serviceTextColor};
  font-size: 16px;
`

export const GenderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 45px
`

export const MarkerView = styled(Animated.View)<{ isDragging: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${props => props.theme.common.gradientButtonColorStart};
    border-color: ${props => props.theme.common.gradientButtonColorStart};
    border-width: 1px;
    shadow-color: ${props => props.theme.common.gradientButtonColorStart};
    shadow-offset: 0px 0px;
    shadow-opacity: ${props => (props.isDragging ? 0.5 : 0)};
    shadow-radius: 10px;
`

export const ResetButton = styled.TouchableOpacity`
  padding: 12px;
  width: 38%;
  align-items: center;
  background-color: transparent;
  border-color: ${props => props.theme.common.inputBorderColor};
  border-width: 1px;
  border-radius: 8px;
`

export const ResetText = styled.Text`
  color: ${props => props.theme.common.inputTextColor};
  font-size: 18px;
`

export const ApplyButton = styled.TouchableOpacity`
  padding: 12px;
  width: 38%;
  align-items: center;
  background-color: ${props => props.theme.common.buttonGradientOrangeStart};
  border-radius: 8px;
`

export const ApplyText = styled.Text`
  color: ${props => props.theme.common.inputTextColor};
  font-size: 18px;
`

export const DragIndicator = styled.View`
  width: 40px;
  height: 4px;
  background-color: ${props => props.theme.common.inputPlaceholderColor};
  border-radius: 2px;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const GenderText = styled.Text<{ active: boolean }>`
  font-size: 16px;
  color: ${props => props.theme.common.inputTextColor};
`

export const ButtonMatchesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 16px;
`

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  margin-horizontal: 20px;
`

export const AnimatedButtonView = styled(Animated.View)<{ active: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => (props.active ? props.theme.common.gradientButtonColorStart : props.theme.common.buttonGradientGrayStart)};
`

export const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => `${props.theme.common.gradientButtonColorStart}1A`};
  border-radius: 10px;
`

export const ButtonText = styled(Animated.Text)<{ active: boolean }>`
  font-size: 14px;
  font-family: ${props => (props.active ? 'Poppins-Bold' : 'Poppins-Regular')};
  color: ${props => (props.active ? props.theme.common.gradientButtonColorStart : props.theme.common.buttonGradientGrayStart)};
  text-transform: capitalize;
`

export const SelectedGamesButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.common.inputBackgroundColor};
  padding: 16px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.common.inputBorderColor};
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SelectedGamesText = styled.Text`
  color: ${props => props.theme.common.inputTextColor};
  font-size: 16px;
`

export const SelectedGamesCount = styled.Text`
  color: ${props => props.theme.common.gradientButtonColorStart};
  font-size: 16px;
  font-family: 'Poppins-Bold';
`

export const GamesSelectorWrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.secondaryBg};
  padding-top: 60px;
  padding-bottom: 20px;
`

export const GamesSelectorHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 16px;
  margin-bottom: 16px;
`

export const GamesSelectorTitle = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.common.serviceTextColor};
`

export const GamesSelectorCloseButton = styled.TouchableOpacity``

export const GamesSelectorCloseText = styled.Text`
  color: ${props => props.theme.common.gradientButtonColorStart};
  font-size: 16px;
`

export const GamesSelectorButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  margin-top: auto;
`

export const GamesSelectorResetButton = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.common.buttonGradientGrayStart};
  margin-right: 8px;
`

export const GamesSelectorApplyButton = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.theme.common.gradientButtonColorStart};
  margin-left: 8px;
`

export const GamesSelectorResetText = styled.Text`
  color: ${props => props.theme.common.buttonGradientGrayStart};
  font-size: 16px;
`

export const GamesSelectorApplyText = styled.Text`
  color: ${props => props.theme.common.buttonTextColor};
  font-size: 16px;
  font-family: 'Poppins-Bold';
`
