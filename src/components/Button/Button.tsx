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
}

export const Button: FC<IProps> = ({
  variant = 'primary',
  text,
  onPress,
  width,
  margin = 20,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...buttonStyles[`button_${variant}`], width, margin}}>
      <View style={buttonStyles.contentContainer}>
        {icon && <Image source={icon} />}
        {text && <Text style={buttonStyles[`text_${variant}`]}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};
