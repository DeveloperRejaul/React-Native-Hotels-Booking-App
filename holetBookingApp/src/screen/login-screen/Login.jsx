import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {rf} from '../../constent/responsivedimensions.js';
import {comName} from '../../constent/componentName.js';
import useStyle from '../signup-screen/useStyle.js';
import LogoCom from '../../components/LogoCom.js';
import BtnCom from '../../components/BtnCom.js';
import InputCom from '../../components/InputCom.js';
import {Image} from 'react-native';
import {imagePhat} from '../../constent/imagePhat.js';
import {formValidation} from '../../utilities/formValidationClass.js';
import {useDispatch} from 'react-redux';
import {handelLogin} from '../../redux/features/login/loginSlice.js';
import useApi from '../../api/useApi.js';

const Login = ({navigation}) => {
  // For 2 input
  const [fullName, onChangeName] = useState('');
  const [fullNameBgColor, setFullNameBgColor] = useState('#f7f7f7');

  const [password, onChangePassword] = useState('');
  const [passwordBgColor, setPasswordBgColor] = useState('#f7f7f7');

  //for password Show And Hide
  const [passwordHide, setPasswordHide] = useState(true);

  //
  const url =
    'https://hotelbookingappserver-production.up.railway.app/users/login/';
  const {data, error, postData, loading, status} = useApi();

  const dispatch = useDispatch();
  // For style
  const styles = useStyle();

  //
  const userName = value => {
    onChangeName(value);
    const {backgroundColor} = formValidation.userName(value);
    setFullNameBgColor(backgroundColor);
  };

  //
  const passwordInput = value => {
    onChangePassword(value);
    const {backgroundColor} = formValidation.password(value);
    setPasswordBgColor(backgroundColor);
  };

  // Log in Data
  const handleLogin = async () => {
    if (fullName) {
      if (password) {
        await postData(url, {
          username: fullName,
          password: password,
        });
      } else {
        setPasswordBgColor('#ffe7da');
      }
    } else {
      setFullNameBgColor('#ffe7da');
    }
  };

  useEffect(() => {
    if (Number(status) === 200) {
      dispatch(handelLogin(data));
    }
  }, [data]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
          {/* Header Part */}
          <LogoCom />
          {/* Body Part */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}>
            {/* Name input part */}
            <View>
              <InputCom
                lable={'Name'}
                leftIconName="person-outline"
                placeholder="Rejaul"
                onChangeText={userName}
                value={fullName}
                inputBodyStyle={{backgroundColor: fullNameBgColor}}
              />
              {/* Password input part */}
              <InputCom
                rightIconName={passwordHide ? 'eye-off' : 'eye'}
                onPress={() => setPasswordHide(pre => !pre)}
                placeholder="********"
                onChangeText={passwordInput}
                value={password}
                secureTextEntry={passwordHide}
                lable={'Password'}
                style={styles.input}
                leftIconName={'md-lock-closed-outline'}
                inputBodyStyle={{backgroundColor: passwordBgColor}}
              />

              {/* Login Button Part */}

              <View style={styles.loginBody}>
                <BtnCom text="Login" onPress={handleLogin} loading={loading} />
                <Text
                  style={styles.forgate}
                  onPress={() => navigation.navigate(comName.forgotPassword)}>
                  Forgate password ?
                </Text>
                <Text style={styles.OR}>OR</Text>
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
            </View>

            {/* Footr Part */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don't have an account yet ?
                <Text
                  onPress={() => navigation.replace(comName.Signup)}
                  style={styles.signUp}>
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
