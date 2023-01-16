import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../components/StepperHeader/StepperHeader';
import {ScreenProps} from '../../types';
import {Button} from '../../components/Button/Button';
import {navRoutes} from '../../utils/constants';
import {nameInputStyles} from './styles';
import {InputField} from '../../components/InputField/InputField';

export const NameInputScreen: FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={nameInputStyles.container}>
      <View>
        <ScreenHeader navigation={navigation} currentStep={2} stepsCount={3} />
        <Text style={nameInputStyles.title}>What's your name?</Text>
      </View>
      <View style={nameInputStyles.nameInput}>
        <InputField label="Name" placeHolder="Enter your name" />
      </View>
      <Button
        text="Next"
        variant="primary"
        onPress={() => navigation.navigate(navRoutes.phoneNumber)}
      />
    </SafeAreaView>
  );
};
