export interface ChipProps {
  label?: string,
  prefixIcon?: string,
  prefix?: any,
  shape?: 'leaf' | 'pill',
  color?: string,
  size?: string,
  iconColor?: string,
  textColor?: string,
  large?: boolean,
  medium?: boolean,
  onPress?: (value?: any) => void,
  disabled?: boolean,
  width?: string,
  fontFamily?: string,
  iconType?: 'material' | 'ionIcons' | 'customType' | 'fastImage'
}

export interface ChipWrapperProps {
  color?: string
  large?: boolean
  medium?: boolean
  shape?: 'leaf' | 'pill'
  width?: string;
}

export interface IconProps {
  iconColor?: string
  label?: string
  size?: string
}

export interface LabelProps {
  large?: boolean
  textColor?: string
}
