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

function Pemm() {  
  const [loading, setLoading] = useState(false);
  const stripe=useStripe()
  const subscribe = async() => {
    const response = await fetch("http://localhost:8080/pay", {
      method: "POST",
      body: JSON.stringify({
        amount:Math.floor(10 * 100),
        name:'kenil',
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data >>>>>>>>>>>>",data);
    // if (!response.ok)return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    console.log("clientSecret >>>>>>>>>>>>",clientSecret);
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      
    });
    // if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    // if (presentSheet.error) return Alert.alert(presentSheet.error.message);
}

  return (
    <View style={{paddingTop:50}}>
      <TouchableOpacity onPress={()=>subscribe()}><Text>stripe pay</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
});

export default Pemm;
