import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useStyle from '../useStyle.js';
import InputCom from '../../../components/InputCom.js';
import {formValidation} from '../../../utilities/formValidationClass.js';

const Password = () => {
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeconfirmPassword] = useState('');

  // password Show And Hide
  const [passwordHide, setPasswordHide] = useState(true);

  //confirm password Show And Hide
  const [confirmPasswordHide, setConfirmPasswordHide] = useState(true);

  const [passColor, setPassColor] = useState('#f7f7f7');
  const [conPassColor, setConPassColor] = useState('#f7f7f7');

  // For style
  const styles = useStyle();

  // Password handel
  const handlPassword = value => {
    onChangePassword(value);
    const {backgroundColor} = formValidation.password(value);
    setPassColor(backgroundColor);
  };

  // handel confirm Password
  const handlConfirmPassword = value => {
    onChangeconfirmPassword(value);
    const {backgroundColor} = formValidation.comfirmPassword(password, value);
    setConPassColor(backgroundColor);
  };

  return (
    <>
      {/* Password input part */}
      <InputCom
        rightIconName={passwordHide ? 'eye-off' : 'eye'}
        onPress={() => setPasswordHide(pre => !pre)}
        placeholder="********"
        onChangeText={handlPassword}
        value={password}
        secureTextEntry={passwordHide}
        lable={'Password'}
        leftIconName={'md-lock-closed-outline'}
        style={styles.inputCom}
        inputBodyStyle={{backgroundColor: passColor}}
      />

      {/*Confirm Password input part */}
      <InputCom
        rightIconName={confirmPasswordHide ? 'eye-off' : 'eye'}
        onPress={() => setConfirmPasswordHide(pre => !pre)}
        placeholder="********"
        onChangeText={handlConfirmPassword}
        value={confirmPassword}
        secureTextEntry={confirmPasswordHide}
        lable={'Confirm Password'}
        leftIconName={'md-lock-closed-outline'}
        style={styles.inputCom}
        inputBodyStyle={{backgroundColor: conPassColor}}
      />
    </>
  );
};

export default Password;

const costomStyle = StyleSheet.create({
  d: {
    borderWidth: 1,
    // backgroundColor,
  },
});
