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

function FirstPage(props) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>Payment Gateway Methods</Text>
      </View>
      <View
        style={{
          backgroundColor: '#a8aefa',
          paddingVertical: 50,
          borderTopEndRadius: 15,
          borderTopLeftRadius: 15,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Razorpay');
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
        <View style={{alignItems: 'center',paddingTop:30, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Pemm');
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
            Stripe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});

export default FirstPage;
