import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputCom from '../../../components/InputCom.js';
import useStyle from '../useStyle.js';
import {useState} from 'react';
import {formValidation} from '../../../utilities/formValidationClass.js';

const PhoneNumber = () => {
  const [phoneNumber, onChangeNumber] = useState('');
  const [bgColor, setBgColor] = useState('#f7f7f7');

  // For style
  const styles = useStyle();

  // handel Phone number
  const handelPhoneNumber = value => {
    onChangeNumber(value);
    const {backgroundColor} = formValidation.phoneNumper(value);
    setBgColor(backgroundColor);
  };

  return (
    <>
      {/* Phone Number Field  */}
      <InputCom
        lable={'Phone number'}
        placeholder="Phone Number"
        onChangeText={handelPhoneNumber}
        value={phoneNumber}
        keyboardType={'number-pad'}
        leftIconName={'call-outline'}
        style={styles.inputCom}
        inputBodyStyle={{backgroundColor: bgColor}}
      />
    </>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({});
