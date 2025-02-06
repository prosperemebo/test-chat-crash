import {
  ServiceItemContainer, ServiceItemInnerWrapper, View, ServiceImage, ServiceItemLabel,
} from './styles'
import { ServiceItemProps } from './types'

const ServiceItem = ({ title, onPress, icon, innerHeight }: ServiceItemProps) => (
  <ServiceItemContainer>
    <ServiceItemInnerWrapper onPress={onPress}>
      <View>
        <ServiceImage source={icon} innerHeight={innerHeight} />
        <ServiceItemLabel>
          {title}
        </ServiceItemLabel>
      </View>
    </ServiceItemInnerWrapper>
  </ServiceItemContainer>
)

export default ServiceItem