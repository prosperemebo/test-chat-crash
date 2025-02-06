export type GradientButtonProps = {
  icon?: boolean | React.ReactNode
  size?: 'small' | 'default'
  width?: number
  bottom?: number
  height?: number
  onPress: () => void
  disabled?: boolean
  buttonText: string
  prefixIcon?: string
  customMargin?: string
  outline?: boolean
  isLoading?: boolean
  passive?: boolean
  actionButton?: boolean
  spanWidth?: boolean
  buttonWidth?: number | string
};