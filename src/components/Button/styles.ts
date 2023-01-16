import {StyleSheet, TextStyle} from 'react-native';
import {colors} from '../../utils/colors';

const buttonCommons = {
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'center',
} as TextStyle;

export const buttonStyles = StyleSheet.create({
  button_primary: {
    backgroundColor: colors.royalBlue,
    padding: 16,
    borderRadius: 16,
  },
  button_secondary: {},
  text_primary: {
    ...buttonCommons,
    color: colors.white,
  },
  text_secondary: {...buttonCommons, color: colors.royalBlue},
});
