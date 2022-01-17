import React from 'react';
import {
  NavigationContainer,
  createStackNavigator,
  TransitionPresets,
} from '@app/libraries';
import {DemoScreen, LoginScreen} from '@app/screens';
// import {DemoScreen} from '@app/screens';
import {NAVIGATION_DEMO} from '@app/constants';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='NAVIGATION_LOGIN'//yang pertama di jalankan
        screenOptions={({}) => ({
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}>
        <Stack.Screen name={NAVIGATION_DEMO} component={DemoScreen} />
        <Stack.Screen name= 'NAVIGATION_LOGIN' component = {LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
