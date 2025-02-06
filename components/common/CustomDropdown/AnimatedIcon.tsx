import { Animated } from 'react-native'
import { AnimatedChevronIcon } from "@/components/common/CustomDropdown/styles";
import { AnimatedIconProps } from './types';

const AnimatedIcon = ({ rotate }: AnimatedIconProps) => {
  return (
    <Animated.View
      style={{
        transform: [{ rotate }]
      }}
    >
      <AnimatedChevronIcon name="chevron-down" />
    </Animated.View>
  )
}

export default AnimatedIcon 