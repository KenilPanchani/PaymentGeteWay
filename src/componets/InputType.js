import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function InputType(props) {
  const [condi1, setCodi1] = useState(true);
  return (
    <View>
      <Text style={styles.Text}>
        {condi1 === true ? ' ' : props.name}
      </Text>
      <TextInput
        value={props.TextInput}
        secureTextEntry={props.password}
        keyboardType={props.type==="String"?'default':'number-pad'}
        // numberOfLines={props.type==="String"?20:10}
        style={[
          styles.TextInput,
          {
            fontWeight: condi1 === true ? '400' : 'bold',
          },
        ]}
        placeholderTextColor={'#fff'}
        placeholder={props.name}
        onChangeText={e => {
          e !== '' ? setCodi1(false) : setCodi1(true);
          props.type==="String"?props.setTextInput(e):props.type==="Amount"?e.length<3?props.setTextInput(e):null:e.length<11?props.setTextInput(e):null
          // props.setTextInput(e);
        }}></TextInput>
    </View>
  );
}

export default InputType;

const styles = StyleSheet.create({
  Text: {
    marginTop: 20,
    color: '#fff',
  },
  TextInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 10,
    color: '#fff',
  },
});
