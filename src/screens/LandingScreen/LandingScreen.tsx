import React, {FC} from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../components/Button/Button';
import {ScreenProps} from '../../types';
import {navRoutes} from '../../utils/constants';
import {landingScreenStyles} from './styles';

export const LandingScreen: FC<ScreenProps> = ({navigation}) => {
  return (
    <View style={landingScreenStyles.container}>
      <ImageBackground
        source={require('../../assets/splash.png')}
        resizeMode="cover"
        style={landingScreenStyles.image}>
        <SafeAreaView>
          <View style={landingScreenStyles.buttonsContainer}>
            <View style={landingScreenStyles.login}>
              <Button text="LOGIN" variant="secondary" />
            </View>
            <Button
              text="SIGN UP"
              variant="primary"
              onPress={() => navigation.navigate(navRoutes.phoneNumber)}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
