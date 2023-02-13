import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {imagePhat} from '../../constent/imagePhat.js';
import {rh, rf, rw} from '../../constent/responsivedimensions.js';
import {COLORS} from '../../constent/colors.js';
import InputCom from '../../components/InputCom.js';
import BtnCom from '../../components/BtnCom.js';
import {comName} from '../../constent/componentName.js';
import {formValidation} from '../../utilities/formValidationClass.js';
import useApi from '../../api/useApi.js';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = route => {
  const navigation = useNavigation();
  const [passwordHide, setPasswordHide] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordBgColor, setNewPasswordBgColor] = useState('');
  const {putData, loading, status} = useApi();

  //
  const [confirmPasswordHide, setConfirmPasswordHide] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordBgColor, setConfirmPasswordBgColor] = useState('');
  const email = route.route.params.email;

  const handelSubmit = () => {
    putData(
      'https://hotelbookingappserver-production.up.railway.app/users/updatePassword/',
      {
        email: email,
        password: confirmPassword,
      },
    );
  };

  useEffect(() => {
    if (status === 200) {
      navigation.navigate(comName.Login);
    }
  }, [status]);

  const handelPassword = value => {
    setNewPassword(value);
    const {backgroundColor} = formValidation.password(value);
    setNewPasswordBgColor(backgroundColor);
  };

  //
  const handelConfirmPassword = value => {
    setConfirmPassword(value);
    const {backgroundColor} = formValidation.comfirmPassword(
      newPassword,
      value,
    );
    setConfirmPasswordBgColor(backgroundColor);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageBody}>
        <Image
          source={imagePhat.forgotPassword}
          style={styles.forgotPasswordImg}
        />
        <Text style={styles.forgotPass}>Reset Password </Text>

        <InputCom
          leftIconName={'md-lock-closed-outline'}
          lable="New Password"
          placeholder={'********'}
          style={styles.inputContainer}
          lableStyle={styles.lable}
          placeholderColor={'#596276'}
          inputTextStyle={styles.input}
          rightIconName={passwordHide ? 'eye-off' : 'eye'}
          onPress={() => setPasswordHide(pre => !pre)}
          value={newPassword}
          onChangeText={handelPassword}
          secureTextEntry={passwordHide}
          inputBodyStyle={{backgroundColor: newPasswordBgColor}}
        />

        <InputCom
          leftIconName={'md-lock-closed-outline'}
          lable="Confirm Password"
          placeholder={'********'}
          style={styles.inputContainer}
          lableStyle={styles.lable}
          placeholderColor={'#596276'}
          inputTextStyle={styles.input}
          rightIconName={confirmPasswordHide ? 'eye-off' : 'eye'}
          onPress={() => setConfirmPasswordHide(pre => !pre)}
          value={confirmPassword}
          onChangeText={handelConfirmPassword}
          secureTextEntry={confirmPasswordHide}
          inputBodyStyle={{backgroundColor: confirmPasswordBgColor}}
        />
        <BtnCom loading={loading} text={'Submit'} onPress={handelSubmit} />
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  forgotPasswordImg: {
    height: rh(25),
    width: rh(25),
    resizeMode: 'cover',
    marginVertical: rh(4),
  },
  container: {flex: 1, backgroundColor: COLORS.white},
  ImageBody: {
    alignItems: 'center',
    paddingHorizontal: rw(4),
  },
  forgotPass: {
    fontSize: rf(3.7),
    fontWeight: '700',
    color: '#3a4f7b',
    paddingBottom: rh(2),
  },
  inputContainer: {
    paddingTop: rh(2),
    paddingBottom: rh(2),
    paddingBottom: rh(3),
  },
  lable: {
    fontWeight: '500',
    color: '#596276',
  },
  input: {
    fontWeight: '500',
  },
});
