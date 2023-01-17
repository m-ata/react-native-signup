import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const verifyPhoneStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '96%',
  },
  title: {
    fontSize: 46,
    fontWeight: '700',
    marginHorizontal: 26,
  },
  nameInput: {
    paddingHorizontal: 20,
  },
  info: {
    marginTop: 20,
    marginLeft: 26,
    color: colors.gray,
  },
  number: {
    marginLeft: 26,
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    padding: 20,
  },
});
