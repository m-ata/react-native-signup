import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../components/StepperHeader/StepperHeader';
import {ScreenProps} from '../../types';
import {phoneNumberScreenStyles} from './styles';
import {Button} from '../../components/Button/Button';
import {navRoutes} from '../../utils/constants';
import PhoneInput, {isValidNumber} from 'react-native-phone-number-input';

export const PhoneNumberScreen: FC<ScreenProps> = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState<any>();

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
          onChangeCountry={code => setCountry(code.name)}
          onChangeFormattedText={text => {
            setPhone(text);
          }}
        />
      </View>
      <Button
        disabled={!isValidNumber(phone, country)}
        text="Next"
        variant="primary"
        onPress={() => navigation?.navigate(navRoutes.verifyPhone, {phone})}
      />
    </SafeAreaView>
  );
};
