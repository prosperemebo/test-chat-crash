import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { BLACK, GRAY110, WHITE, gradient, nGRAYBACKGROUND4, nYELLOW, orangeGradient, t10WHITE } from '@/theme/color';
import { GradientButtonProps } from './types';

const { width } = Dimensions.get('window')

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Gradient = styled(LinearGradient).attrs<GradientButtonProps>(({ disabled, passive, actionButton }) => {
  if (disabled || passive) {
    return {
      colors: [nGRAYBACKGROUND4, nGRAYBACKGROUND4] as [string, string],
      start: gradient.START,
      end: gradient.END,
    };
  } else if (actionButton) {
    return {
      colors: [GRAY110, GRAY110] as [string, string],
      start: gradient.START,
      end: gradient.END,
    };
  } else {
    return {
      colors: orangeGradient.COLORS as [string, string],
      start: orangeGradient.START,
      end: orangeGradient.END,
      useAngle: true,
      angle: 90,
    };
  }
})`
  width: ${({ buttonWidth }) => (buttonWidth ? buttonWidth : width * 0.85)}px;
  ${({ spanWidth }) => (spanWidth ? 'width: 100%;' : '')}
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  margin: ${({ customMargin }) => (customMargin ? customMargin : '5px 5px 5px')};
  border-radius: 68px;
  justify-content: center;
  align-items: center;
  border-color: ${t10WHITE};
  border-width: ${({ disabled, passive, actionButton }) =>
    disabled || passive || actionButton ? '1.5px' : '0px'};

  ${({ size, buttonWidth }) =>
    size === 'small' &&
    css`
      margin: 0 5px;
      height: 50px;
      width: ${buttonWidth ? buttonWidth : width * 0.45}px;
    `}

  ${({ outline }) =>
    outline &&
    css`
      overflow: hidden;
      padding: 2px;
    `}
`;

export const TextContainer = styled.View<{ outline?: boolean }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ outline }) =>
    outline &&
    css`
      background-color: white;
      width: 100%;
      border-radius: 35px;
    `}
`;

export const ButtonLabel = styled.Text<{ size?: string; outline?: boolean; actionButton?: boolean }>`
  color: ${({ actionButton }) => (actionButton ? nYELLOW : WHITE)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  font-weight: bold;
  padding-vertical: 10px;
  ${({ outline }) =>
    outline &&
    css`
      color: ${BLACK};
    `}
`;

export const ButtonIcon = styled(Icon) <{ outline?: boolean }>`
  margin: 5px;
  color: ${WHITE};
  font-size: 24px;
  ${({ outline }) =>
    outline &&
    css`
      color: ${BLACK};
    `}
`;
