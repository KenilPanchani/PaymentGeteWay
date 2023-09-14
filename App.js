import {StripeProvider} from '@stripe/stripe-react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Pemm from './src/Pemm';
import React, {useEffect, useCallback} from 'react';
import {Linking} from 'react-native';
import {useStripe} from '@stripe/stripe-react-native';
import Razorpay from './src/Razorpay';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './src/FirstPage';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <StripeProvider publishableKey="pk_test_51NpljaSGlG7DgWIoroZvGZdmrIAU2QOTlnhcPAPepYITKVskOR748CNL6UZblNvyvZc7XeAYqeslR1pW3AgiMbTy00x8bL8Hfd">
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="Pemm" component={Pemm} />
          <Stack.Screen name="Razorpay" component={Razorpay} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
