import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../components/StepperHeader/StepperHeader';
import {ScreenProps} from '../../types';
import {Button} from '../../components/Button/Button';
import {navRoutes} from '../../utils/constants';
import {passwordInputStyles} from './styles';
import {InputField} from '../../components/InputField/InputField';

export const PasswordInputScreen: FC<ScreenProps> = ({navigation}) => {
  const bulletChar = '\u2022';

  return (
    <SafeAreaView style={passwordInputStyles.container}>
      <View>
        <ScreenHeader navigation={navigation} currentStep={3} stepsCount={3} />
        <Text style={passwordInputStyles.title}>Create password</Text>
      </View>
      <View style={passwordInputStyles.passwordInput}>
        <InputField
          label="Password"
          placeHolder="Create your password"
          isPassword={true}
        />
        <View style={passwordInputStyles.listContainer}>
          <Text>{`${bulletChar} Minimum 8 characters`}</Text>
          <Text>{`${bulletChar} 1 upper case letter`}</Text>
          <Text>{`${bulletChar} 1 number`}</Text>
        </View>
      </View>
      <Button
        text="Next"
        variant="primary"
        onPress={() => navigation?.navigate(navRoutes.contactsList)}
      />
    </SafeAreaView>
  );
};
