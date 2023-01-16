import React, {FC} from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';
import {buttonStyles} from './styles';

interface IProps {
  variant: 'primary' | 'secondary';
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  width?: number;
  margin?: number;
}

export const Button: FC<IProps> = ({
  variant = 'primary',
  text,
  onPress,
  width,
  margin = 20,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{...buttonStyles[`button_${variant}`], width, margin}}>
      <Text style={buttonStyles[`text_${variant}`]}>{text}</Text>
    </Pressable>
  );
};
