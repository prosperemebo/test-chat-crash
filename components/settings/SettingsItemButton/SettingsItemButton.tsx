import { Container, InnerWrapper, View, StyledIcon, Value, Label, Icon } from './styles'
import { SettingsItemButtonProps } from './types'

const SettingsItemButton = ({ onPress, icon, value, title }: SettingsItemButtonProps) => (
  <Container>
    <InnerWrapper onPress={onPress}>
      <View>
        {icon && <Icon source={icon} />}
        <Label>
          {title}
        </Label>
      </View>
      {value ? <Value>{value}</Value> : false}
      <StyledIcon
        size={17}
        name='chevron-forward-outline'
      />
    </InnerWrapper>
  </Container>
)

export default SettingsItemButton