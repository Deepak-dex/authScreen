import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { FeedBack1Screen, FeedBack2Screen, FeedBack3Screen } from '../screens';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function Navigator() {
  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator style={{backgroundColor: 'white'}}>
            <Stack.Screen name="FeedBack1Screen" component={FeedBack1Screen} />
            <Stack.Screen name="FeedBack2Screen" component={FeedBack2Screen} />
            <Stack.Screen name="FeedBack3Screen" component={FeedBack3Screen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}