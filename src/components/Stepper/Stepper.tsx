import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {stepperStyles} from './styles';

interface IProps {
  stepsCount: number;
  currentStep: number;
}

export const Stepper: FC<IProps> = ({currentStep, stepsCount}) => {
  return (
    <View style={stepperStyles.titleContainer}>
      <Text style={stepperStyles.text}>Sign Up</Text>
      <View style={stepperStyles.stepsContainer}>
        {[...Array(stepsCount).keys()].map(val => (
          <View
            key={val}
            style={
              val < currentStep
                ? stepperStyles.stepCurrent
                : stepperStyles.stepRemaining
            }
          />
        ))}
      </View>
    </View>
  );
};
