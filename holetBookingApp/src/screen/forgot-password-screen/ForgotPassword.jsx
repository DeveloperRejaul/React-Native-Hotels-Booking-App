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

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailRoPhoneBgColor, setEmailRoPhoneBgColor] = useState('#f7f7f7');
  const {postData, data, status, loading, error} = useApi();

  const handelInput = value => {
    setEmail(value);
    const {backgroundColor} = formValidation.email(value);
    setEmailRoPhoneBgColor(backgroundColor);
  };

  const handelSubmit = async () => {
    await postData(
      'https://hotelbookingappserver-production.up.railway.app/users/mailExist',
      {
        email: email,
      },
    );
  };

  useEffect(() => {
    if (status === 200) {
      navigation.navigate(comName.resetPassword, {email});
    }
  }, [status]);

  return (
    <View style={styles.container}>
      <View style={styles.ImageBody}>
        <Image
          source={imagePhat.forgotPassword}
          style={styles.forgotPasswordImg}
        />
        <Text style={styles.forgotPass}>Forgot Password ?</Text>
        <Text style={styles.messsage}>
          Don't worry it happens, please enter the address associated with your
          account
        </Text>

        <InputCom
          leftIconName={'mail-outline'}
          lable="Type your Email"
          placeholder={'rejaul@gamail.com'}
          style={styles.inputContainer}
          lableStyle={styles.lable}
          placeholderColor={'#596276'}
          inputTextStyle={styles.input}
          value={email}
          onChangeText={handelInput}
          inputBodyStyle={{backgroundColor: emailRoPhoneBgColor}}
        />
        <BtnCom loading={loading} text={'Submit'} onPress={handelSubmit} />
      </View>
    </View>
  );
};

export default ForgotPassword;

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
  messsage: {
    fontSize: rf(2),
    color: '#596276',
    paddingBottom: rh(2),
    fontWeight: '500',
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
