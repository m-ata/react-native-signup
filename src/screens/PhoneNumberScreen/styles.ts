import {StyleSheet} from 'react-native';

export const phoneNumberScreenStyles = StyleSheet.create({
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
  phoneInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
