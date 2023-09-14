import {
  PlatformPay,
  PlatformPayButton,
  confirmPlatformPayPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import InputType from './componets/InputType';

function Pemm() {
  const [textInput1, setTextInput1] = useState('');
  const [textInput4, setTextInput4] = useState('');

  const stripe = useStripe();
  const subscribe = async () => {
    if (textInput1.trim() !== ''&& textInput4.trim() !== '') {
      const response = await fetch(
        Platform.OS === 'ios'
          ? 'http://localhost:8080/pay'
          : 'http://192.168.24.200:8080/pay',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: Math.floor(Number(textInput4) * 100),
            name: textInput1,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      console.log('data >>>>>>>>>>>>', data);
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      console.log('clientSecret >>>>>>>>>>>>', clientSecret);
      const initSheet = await stripe.initPaymentSheet({
        googlePay: {
          merchantCountryCode: 'US',
          testEnv: true,
        },
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: textInput1,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      console.log(presentSheet);
      if (presentSheet.error) { 
      }
      else{
        Alert.alert('successfully payment')
        props.navigation.navigate('FirstPage');
      }
    }
  };

  const pay = async () => {
    if (textInput1.trim() !== '' && textInput4.trim() !== '') {
      const response = await fetch(
        Platform.OS === 'ios'
          ? 'http://localhost:8080/pay'
          : 'http://192.168.24.200:8080/pay',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: Math.floor(Number(textInput4) * 100),
            name: textInput1,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      const clientSecret = data.clientSecret;

      const {error} = await confirmPlatformPayPayment(clientSecret, {
        googlePay: {
          testEnv: true,
          merchantName: 'My merchant name',
          merchantCountryCode: 'US',
          currencyCode: 'USD',
          billingAddressConfig: {
            format: PlatformPay.BillingAddressFormat.Full,
            isPhoneNumberRequired: true,
            isRequired: true,
          },
        },
      });

      if (error) {
        Alert.alert(error.code, error.message);
        return;
      }
      Alert.alert('Success', 'The payment was confirmed successfully.');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>Razor Pay</Text>
      </View>
      <View
        style={{
          backgroundColor: '#a8aefa',
          paddingTop: 10,
          paddingBottom: 20,
          paddingHorizontal: 20,
          borderTopEndRadius: 15,
          borderTopLeftRadius: 15,
        }}>
        <InputType
          name={'Name'}
          password={false}
          setTextInput={setTextInput1}
          TextInput={textInput1}
          type={'String'}
        />
        <InputType
          name={'Amount'}
          password={false}
          setTextInput={setTextInput4}
          TextInput={textInput4}
          type={'Amount'}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              subscribe();
            }}
            style={{
              width: '98%',
              backgroundColor: '#000',
              paddingVertical: 5,
              marginBottom: 20,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, color: '#fff'}}>Pay with card</Text>
          </TouchableOpacity>
          <PlatformPayButton
            type={PlatformPay.ButtonType.Pay}
            onPress={pay}
            style={{
              width: '100%',
              height: 50,
            }}
          />
        </View>
      </View>
    </View>
    // <View style={{paddingTop:50}}>
    //           <InputType
    //       name={'Name'}
    //       password={false}
    //       setTextInput={setTextInput1}
    //       TextInput={textInput1}
    //       type={'String'}
    //     />
    //   <TouchableOpacity onPress={()=>subscribe()}><Text>stripe pay</Text></TouchableOpacity>
    // <PlatformPayButton
    //   type={PlatformPay.ButtonType.Pay}
    //   onPress={pay}
    //   style={{
    //     width: '100%',
    //     height: 50,
    //   }}
    // />
    // </View>
  );
}
const styles = StyleSheet.create({});

export default Pemm;
