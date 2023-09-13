import { StripeProvider } from '@stripe/stripe-react-native';
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
import React, { useEffect, useCallback } from 'react';
import { Linking } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import Razorpay from './src/Razorpay';

function App() {
  return (
    // <StripeProvider publishableKey="pk_test_51NpljaSGlG7DgWIoroZvGZdmrIAU2QOTlnhcPAPepYITKVskOR748CNL6UZblNvyvZc7XeAYqeslR1pW3AgiMbTy00x8bL8Hfd">
    //   <Pemm></Pemm>
    // </StripeProvider>
    <Razorpay></Razorpay>
  );
}

const styles = StyleSheet.create({
});

export default App;
