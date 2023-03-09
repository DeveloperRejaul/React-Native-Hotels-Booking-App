import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import InputCom from '../../components/InputCom.js';
import styles from './styles.js';

const Items = ({room, setRoom, adult, setAdult, child, setChild}) => {
  return (
    <View style={[styles.itemsContainer, styles.TDContainer]}>
      <InputCom
        lable={'Room'}
        placeholder="00"
        style={styles.item}
        maxLength={2}
        keyboardType={'number-pad'}
        lableStyle={styles.lable}
        inputBodyStyle={styles.inputBody}
        inputTextStyle={styles.inputText}
        value={room}
        onChangeText={setRoom}
      />
      <InputCom
        lable={'Adult'}
        placeholder="00"
        style={styles.item}
        maxLength={2}
        keyboardType={'number-pad'}
        lableStyle={styles.lable}
        inputBodyStyle={styles.inputBody}
        inputTextStyle={styles.inputText}
        value={adult}
        onChangeText={setAdult}
      />
      <InputCom
        lable={'Child'}
        placeholder="00"
        style={styles.item}
        maxLength={2}
        keyboardType={'number-pad'}
        inputBodyStyle={styles.inputBody}
        inputTextStyle={styles.inputText}
        lableStyle={styles.lable}
        value={child}
        onChangeText={setChild}
      />
    </View>
  );
};

export default Items;
