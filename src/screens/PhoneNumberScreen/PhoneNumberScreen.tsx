import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../components/StepperHeader/StepperHeader';
import {ScreenProps} from '../../types';
import {phoneNumberScreenStyles} from './styles';
import {Button} from '../../components/Button/Button';
import {navRoutes} from '../../utils/constants';
import PhoneInput from 'react-native-phone-number-input';

export const PhoneNumberScreen: FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={phoneNumberScreenStyles.container}>
      <View>
        <ScreenHeader navigation={navigation} currentStep={1} stepsCount={3} />
        <Text style={phoneNumberScreenStyles.title}>
          What's your phone number?
        </Text>
      </View>
      <View style={phoneNumberScreenStyles.phoneInput}>
        <PhoneInput
          layout="second"
          defaultCode="PL"
          autoFocus={true}
          onChangeFormattedText={text => {
            console.log(text);
          }}
        />
      </View>
      <Button
        text="Next"
        variant="primary"
        onPress={() => navigation.navigate(navRoutes.phoneNumber)}
      />
    </SafeAreaView>
  );
};
