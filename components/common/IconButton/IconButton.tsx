import { BlurIconButton, BlurIconButtonWrapper, MaterialIcon, BlurBlock, ImageIconWrapper, ImageIcon } from './styles'
import { IconButtonProps } from './types'

const IconButton = (props: IconButtonProps) => {
  const {
    color, iconColor, onPress, disabled, blur,
    type = 'material', name, size, padding, source
  } = props

  const handlePress = () => {
    onPress && onPress()
  }

  return <BlurIconButton color={color} onPress={handlePress} disabled={disabled}>
    <BlurIconButtonWrapper>
      {blur && <BlurBlock />}
      {(type === 'material' && name) && <MaterialIcon name={name as 'image'} iconColor={iconColor} size={size} padding={padding} />}
      {type === 'image' && (
        <ImageIconWrapper size={size} padding={padding}>
          <ImageIcon source={source} contentFit={'contain'} />
        </ImageIconWrapper>
      )}
    </BlurIconButtonWrapper>
  </BlurIconButton>
}

export default IconButton