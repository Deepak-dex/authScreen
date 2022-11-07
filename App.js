import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {AuthScreen,OtpScreen,UserOnBoard,BankTransfer,Investment, FeedBack1Screen, FeedBack2Screen, FeedBack3Screen} from './src/screens';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
    return (
      <View style={styles.container}>
        <Navigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
