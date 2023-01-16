import React, {FC} from 'react';
import {View} from 'react-native';
import {ScreenProps} from '../../types';
import {Button} from '../Button/Button';
import {Stepper} from '../Stepper/Stepper';
import {stepperHeaderStyles} from './styles';

interface IProps extends ScreenProps {
  stepsCount: number;
  currentStep: number;
}

export const ScreenHeader: FC<IProps> = ({
  navigation,
  currentStep,
  stepsCount,
}) => {
  return (
    <View style={stepperHeaderStyles.header}>
      <Button
        width={26}
        icon={require('../../assets/nav_back.png')}
        variant="secondary"
        onPress={() => navigation.goBack()}
      />
      <Stepper stepsCount={stepsCount} currentStep={currentStep} />
    </View>
  );
};
