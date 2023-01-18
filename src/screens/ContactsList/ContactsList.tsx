import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {ScreenHeader} from '../../components/StepperHeader/StepperHeader';
import {ScreenProps} from '../../types';
import {Button} from '../../components/Button/Button';
import {navRoutes} from '../../utils/constants';
import {contactsStyles} from './styles';
import Contacts from 'react-native-contacts';

export const ContactsList: FC<ScreenProps> = ({navigation}) => {
  Contacts.getAll().then(contacts => {
    console.log(contacts);
  });
  return (
    <SafeAreaView style={contactsStyles.container}>
      <View>
        <ScreenHeader navigation={navigation} currentStep={1} stepsCount={3} />
        <Text style={contactsStyles.title}>Select contacts</Text>
      </View>

      <Button
        text="Next"
        variant="primary"
        onPress={() => navigation?.navigate(navRoutes.nameInput)}
      />
    </SafeAreaView>
  );
};
