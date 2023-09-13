import { useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
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
import {RAZORPAY_KEY_ID , RAZORPAY_KEY_SECRET } from '@env'
import RazorpayCheckout from 'react-native-razorpay';

function Razorpay() {  
    const amount = 100;
    const currency = "INR";
    let razorpayKeyId = RAZORPAY_KEY_ID
  let razorpayKeySecret = RAZORPAY_KEY_SECRET

  console.log(razorpayKeyId);
      const handlePayment = () => {
        var options = {
          description: 'Buy BMW CAR',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: currency,
          key: razorpayKeyId,
          amount: amount*100,
          name: 'test order',
          order_id: "",
          prefill: {
            email: 'xyz@gmail.com',
            contact: '9999999999',
            name: 'User 1'
          },
          theme: { color: '#F37254' }
        }
    
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          Alert.alert(`Success: ${data.razorpay_payment_id}`);
        })
          .catch((error) => {
            // handle failure
            console.log(error)
            Alert.alert(`Error: ${error.code} | ${error.description}`);
          })
      }




      //success@razorpay
      //failure@razorpay
      
  return (
    <View style={{paddingTop:50}}>
      <TouchableOpacity onPress={()=>handlePayment()}><Text>stripe pay</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
});

export default Razorpay;

