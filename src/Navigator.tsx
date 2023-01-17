import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingScreen} from './screens/LandingScreen/LandingScreen';
import {navRoutes} from './utils/constants';
import {PhoneNumberScreen} from './screens/PhoneNumberScreen/PhoneNumberScreen';
import {NameInputScreen} from './screens/NameInputScreen/NameInputScreen';
import {PasswordInputScreen} from './screens/PasswordInputScreen/PasswordInputScreen';
import {VerifyPhoneScreen} from './screens/VerifyPhoneScreen/VerifyPhoneScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={navRoutes.home}
          component={LandingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navRoutes.phoneNumber}
          component={PhoneNumberScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navRoutes.verifyPhone}
          component={VerifyPhoneScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navRoutes.nameInput}
          component={NameInputScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={navRoutes.passwordInput}
          component={PasswordInputScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
