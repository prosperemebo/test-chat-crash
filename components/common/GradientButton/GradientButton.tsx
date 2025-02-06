import { ActivityIndicator } from 'react-native';
import { Button, ButtonIcon, ButtonLabel, Gradient, TextContainer } from './styles';
import { GradientButtonProps } from './types';
import { LOADING_INDICATOR_SIZE } from './constants';
import { useTheme } from 'styled-components/native';

const GradientButton: React.FC<GradientButtonProps> = ({
  icon,
  size,
  width: buttonWidth,
  height,
  onPress,
  disabled = false,
  buttonText,
  prefixIcon,
  customMargin,
  outline = false,
  isLoading = false,
  passive = false,
  actionButton = false,
  spanWidth = false,
}) => {
  const theme = useTheme()
  return (
    <Button onPress={onPress} disabled={disabled}>
      <Gradient
        buttonWidth={buttonWidth}
        height={height}
        size={size}
        disabled={disabled}
        passive={passive}
        actionButton={actionButton}
        outline={outline}
        spanWidth={spanWidth}
        customMargin={customMargin}
      >
        <TextContainer outline={outline}>
          {prefixIcon && <ButtonIcon name={prefixIcon} outline={outline} />}
          <ButtonLabel size={size} outline={outline} actionButton={actionButton}>
            {buttonText}
          </ButtonLabel>
          {icon &&
            (typeof icon === 'boolean' ? (
              <ButtonIcon name="ios-chevron-forward" outline={outline} />
            ) : (
              icon
            ))}
          {isLoading && <ActivityIndicator size={LOADING_INDICATOR_SIZE} color={theme.primaryTextColor} />}
        </TextContainer>
      </Gradient>
    </Button>
  );
};

export default GradientButton;