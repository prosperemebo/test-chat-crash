import React from 'react'

import { ChipWrapper, Label, ChipIconImage, MaterialIcon, Ionicon, ChipIconFastImage } from './styles'
import { ChipProps } from './types'

/**
 * Chip Component
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.label - The label text for the chip
 * @param {string|ImageSourcePropType} props.prefixIcon - The icon to display before the label
 * @param {React.Component} props.prefix - Additional content to display before the label
 * @param {'leaf' | 'pill'} props.shape - The shape of the chip (e.g., 'square', 'rounded', etc.)
 * @param {string} props.color - The color of the chip
 * @param {string} props.iconColor - The color of the icon
 * @param {string} props.textColor - The color of the label text
 * @param {boolean} props.large - Indicates if the chip is large
 * @param {function} props.onPress - The callback function to handle chip press
 * @param {boolean} props.disabled - Indicates if the chip is disabled
 * @param {string} props.width - The width of the chip
 * @param {string} props.fontFamily - The font family of the chip label
 * @param {'material' | 'ionIcons' | 'customType' | 'fastImage'} props.iconType -
 * The type of icon ('material' or 'ionIcons')
 * @returns {React.Component} - The rendered Chip component
 */

const Chip = ({
  label, prefixIcon, prefix, shape,
  color, size, iconColor, textColor,
  large, medium, onPress, disabled,
  width, fontFamily, iconType = 'material',
}: ChipProps) => {
  const isDisabled = disabled || !onPress

  return (
    <ChipWrapper
      shape={shape}
      color={color}
      large={large}
      disabled={isDisabled}
      onPress={onPress}
      width={width}
      medium={medium}
    >
      {prefix}
      {prefixIcon && typeof prefixIcon === 'string' && iconType === 'material' ? (
        <MaterialIcon name={prefixIcon} iconColor={iconColor} size={size} label={label} />
      ) : null}
      {prefixIcon && typeof prefixIcon === 'string' && iconType === 'ionIcons' ? (
        <Ionicon name={prefixIcon} iconColor={iconColor} size={size} label={label} />
      ) : null}
      {prefixIcon && typeof prefixIcon !== 'string' ? <ChipIconImage source={prefixIcon} /> : null}
      {prefixIcon && typeof prefixIcon === 'string' && iconType === 'fastImage' ? (
        <ChipIconFastImage source={{ uri: prefixIcon }} label={label} />
      ) : null}
      {label && (
        <Label large={large} textColor={textColor || iconColor} fontFamily={fontFamily}>
          {label}
        </Label>
      )}
    </ChipWrapper>
  )
}

export default Chip
