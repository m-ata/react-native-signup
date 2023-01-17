import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../components/StepperHeader/StepperHeader';
import {ScreenProps} from '../../types';
import {Button} from '../../components/Button/Button';
import {navRoutes} from '../../utils/constants';
import {verifyPhoneStyles} from './styles';
import {InputField} from '../../components/InputField/InputField';

interface IProps {
  phone?: string;
}

export const VerifyPhoneScreen: FC<ScreenProps<IProps>> = ({
  navigation,
  route,
}) => {
  return (
    <SafeAreaView style={verifyPhoneStyles.container}>
      <View>
        <ScreenHeader navigation={navigation} currentStep={1} stepsCount={3} />
        <Text style={verifyPhoneStyles.title}>Verify number</Text>
        <Text style={verifyPhoneStyles.info}>
          Enter the 4-digit code sent to you at
        </Text>
        <Text style={verifyPhoneStyles.number}>{route?.params?.phone}</Text>
      </View>
      <View style={verifyPhoneStyles.nameInput}>
        <View style={verifyPhoneStyles.inputsContainer}>
          <InputField />
          <InputField />
          <InputField />
          <InputField />
        </View>
      </View>
      <Button
        text="Next"
        variant="primary"
        onPress={() => navigation?.navigate(navRoutes.nameInput)}
      />
    </SafeAreaView>
  );
};
