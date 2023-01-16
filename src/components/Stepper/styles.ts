import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const stepCommons = {
  flexGrow: 1,
  height: 6,
  borderRadius: 10,
} as const;

export const stepperStyles = StyleSheet.create({
  titleContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  stepRemaining: {
    ...stepCommons,
    backgroundColor: colors.alto,
  },
  stepCurrent: {
    ...stepCommons,
    backgroundColor: colors.royalBlue,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
