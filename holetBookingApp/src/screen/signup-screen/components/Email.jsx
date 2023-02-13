import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import InputCom from '../../../components/InputCom.js';
import useStyle from '../useStyle.js';
import {formValidation} from '../../../utilities/formValidationClass.js';

const Email = () => {
  const [email, onChangEmail] = useState('');
  const [emailBgColor, setEmailBgColor] = useState('#f7f7f7');

  // For style
  const styles = useStyle();

  const handelEmail = value => {
    onChangEmail(value);

    const {backgroundColor} = formValidation.email(value);
    setEmailBgColor(backgroundColor);
  };

  return (
    <>
      {/*Email input part */}
      <InputCom
        placeholder="rejaul@gmail.com"
        onChangeText={handelEmail}
        lable={'Email'}
        leftIconName={'mail-outline'}
        style={styles.inputCom}
        value={email}
        inputBodyStyle={{backgroundColor: emailBgColor}}
      />
    </>
  );
};

export default Email;

const styles = StyleSheet.create({});
