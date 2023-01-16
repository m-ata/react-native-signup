import React, {FC} from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {inputFieldStyles} from './styles';

interface IProps {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const InputField: FC<IProps> = ({
  label,
  onChange,
  placeHolder,
  value,
}) => {
  return (
    <View style={inputFieldStyles.container}>
      <Text style={inputFieldStyles.label}>{label}</Text>
      <TextInput
        style={inputFieldStyles.field}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};
