import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const inputFieldStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    flexGrow: 1,
  },
  label: {
    fontWeight: '700',
    marginLeft: 5,
  },
  field: {
    width: '100%',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.alto,
  },
});
