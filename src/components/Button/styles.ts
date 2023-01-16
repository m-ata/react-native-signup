import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const textCommons = {
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'center',
  flexGrow: 1,
} as const;

export const buttonStyles = StyleSheet.create({
  button_primary: {
    backgroundColor: colors.royalBlue,
    padding: 16,
    borderRadius: 16,
  },
  button_secondary: {},
  text_primary: {
    ...textCommons,
    color: colors.white,
  },
  text_secondary: {...textCommons, color: colors.royalBlue},
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
