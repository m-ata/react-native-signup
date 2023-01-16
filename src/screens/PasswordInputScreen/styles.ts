import {StyleSheet} from 'react-native';

export const passwordInputStyles = StyleSheet.create({
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
  passwordInput: {
    paddingHorizontal: 20,
  },
  listContainer: {
    marginVertical: 20,
  },
});
