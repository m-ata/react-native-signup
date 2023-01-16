import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingScreen} from './screens/LandingScreen/LandingScreen';
import {navRoutes} from './utils/constants';
import {PhoneNumberScreen} from './screens/PhoneNumberScreen/PhoneNumberScreen';
import {NameInputScreen} from './screens/NameInputScreen/NameInputScreen';

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
          name={navRoutes.nameInput}
          component={NameInputScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
