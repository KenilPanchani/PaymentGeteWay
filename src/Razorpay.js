import {useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
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
import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';
import RazorpayCheckout from 'react-native-razorpay';
import InputType from './componets/InputType';

function Razorpay(props) {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [textInput4, setTextInput4] = useState('');
  const currency = 'INR';
  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = RAZORPAY_KEY_SECRET;

  console.log(razorpayKeyId);
  const handlePayment = () => {
    if (
      textInput1.trim() !== '' &&
      textInput2.trim() !== '' &&
      textInput3.trim() !== '' &&
      textInput4.trim() !== ''
    ) {
      if (textInput3.match('@gmail.com') == '@gmail.com') {
        var options = {
          description: 'Buy BMW CAR',
          image: '',
          currency: currency,
          key: razorpayKeyId,
          amount: Number(textInput4) * 100,
          name: 'Payment Gateway Methods',
          order_id: '',
          prefill: {
            email: textInput3,
            contact: textInput2,
            name: textInput1,
          },
          theme: {color: '#a8aefa'},
        };

        RazorpayCheckout.open(options).then(data => {
          // Alert.alert(`Success: ${data.razorpay_payment_id}`);
          props.navigation.navigate('FirstPage');
        });
      } else {
        Alert.alert('plsss enter valid email');
      }
    } else {
      Alert.alert('plsss enter valid date');
    }
  };

  // UPI Id =>>>
  //success@razorpay
  //failure@razorpay

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>Razor Pay</Text>
      </View>
      <View
        style={{
          backgroundColor: '#a8aefa',
          paddingTop:10,
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
          name={'contact Number'}
          password={false}
          setTextInput={setTextInput2}
          TextInput={textInput2}
          type={'Number'}
        />
        <InputType
          name={'Email'}
          password={false}
          setTextInput={setTextInput3}
          TextInput={textInput3}
          type={'String'}
        />
        <InputType
          name={'Amount'}
          password={false}
          setTextInput={setTextInput4}
          TextInput={textInput4}
          type={'Amount'}
        />
        <View style={{alignItems: 'center', justifyContent: 'center',paddingVertical:30}}>
          <TouchableOpacity
            onPress={() => {
              handlePayment()
            }}
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 500,
              paddingHorizontal: 70,
              paddingVertical: 20,
              width:300,
              alignItems:'center'
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              Razor Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});

export default Razorpay;
