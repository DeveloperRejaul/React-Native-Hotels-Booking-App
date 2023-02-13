import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {rf, rh} from '../../constent/responsivedimensions.js';
import {comName} from '../../constent/componentName.js';
import useStyle from './useStyle.js';
import {useNavigation} from '@react-navigation/native';
import LogoCom from '../../components/LogoCom.js';
import BtnCom from '../../components/BtnCom.js';
import {Image} from 'react-native';
import {imagePhat} from '../../constent/imagePhat.js';
import Password from './components/Password.jsx';
import Email from './components/Email.jsx';
import PhoneNumber from './components/PhoneNumber.jsx';
import {formValidation} from '../../utilities/formValidationClass.js';
import UserName from './components/UserName.jsx';
import useApi from '../../api/useApi.js';

const Signup = () => {
  const url =
    'https://hotelbookingappserver-production.up.railway.app/users/signup/';
  const {postData, loading} = useApi();
  // For style
  const styles = useStyle();

  const navigation = useNavigation();

  // Handle SignUp Data
  const handaleSignUpBTN = async () => {
    const {email, password, phoneNumber, signUpOk, userName} =
      formValidation.signupBTN();

    if (signUpOk) {
      await postData(url, {
        username: userName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      });
      navigation.navigate(comName.Login);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
            {/* Header Part */}
            <LogoCom containerStyle={styles.logoContainer} />

            {/* Body Part */}
            <View
              style={{flex: 3.8, justifyContent: 'flex-start', width: '100%'}}>
              {/* Name input part */}
              <UserName />

              {/*Email input part */}
              <Email />

              {/* Phone Number Field  */}
              <PhoneNumber />

              {/* Password part */}
              <Password />
            </View>

            {/* Login Button Part */}
            <View style={styles.loginBody}>
              <BtnCom
                text={'Sign up'}
                loading={loading}
                onPress={handaleSignUpBTN}
              />
              <Text style={[styles.OR, {paddingVertical: rh(2)}]}>OR</Text>
              <View style={styles.logoBody}>
                <Icon
                  name="logo-facebook"
                  size={rf(4)}
                  color={'#1a75f4'}
                  style={styles.loginIcon}
                />
                <Image
                  source={imagePhat.googleLogo}
                  style={styles.googleLogo}
                />
                <Icon
                  name="logo-linkedin"
                  size={rf(4)}
                  color={'#1b5dca'}
                  style={styles.loginIcon}
                />
              </View>
            </View>

            {/* Footr Part */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don't have an account yet ?
                <Text
                  onPress={() => navigation.replace(comName.Login)}
                  style={styles.signUp}>
                  LOGIN
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;
