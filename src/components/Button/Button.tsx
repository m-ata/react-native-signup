import React, {FC} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {buttonStyles} from './styles';

interface IProps {
  variant?: 'primary' | 'secondary';
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  width?: number;
  margin?: number;
  icon?: ImageSourcePropType;
  disabled?: boolean;
}

export const Button: FC<IProps> = ({
  variant = 'primary',
  text,
  onPress,
  width,
  margin = 20,
  icon,
  disabled = false,
}) => {
  const buttonStyle = disabled
    ? {...buttonStyles.button_primary, ...buttonStyles.disabled, width, margin}
    : {...buttonStyles[`button_${variant}`], width, margin};
  return (
    <TouchableOpacity
      onPress={event => !disabled && onPress?.(event)}
      style={buttonStyle}>
      <View style={buttonStyles.contentContainer}>
        {icon && <Image source={icon} />}
        {text && <Text style={buttonStyles[`text_${variant}`]}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};
