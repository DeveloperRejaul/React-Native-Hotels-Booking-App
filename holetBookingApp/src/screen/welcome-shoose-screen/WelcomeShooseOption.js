import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import {Pressable} from 'react-native';
import {comName} from '../../constent/componentName.js';
import LogoCom from '../../components/LogoCom.js';
import BtnCom from '../../components/BtnCom.js';

const WelcomeShooseOption = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      {/* Logo Section */}
      <LogoCom />

      {/*Welcome Message Section */}
      <Text style={styles.welcome}>Welcome</Text>

      {/* Login & signUp Choose Option */}
      <View style={styles.BNTbody}>
        <Text style={styles.chooseText}>Please choose option</Text>

        <BtnCom
          text={'Login'}
          onPress={() => navigation.replace(comName.Login)}
        />
        <BtnCom
          text={'Sign up'}
          onPress={() => navigation.replace(comName.Signup)}
        />
      </View>
    </View>
  );
};

export default WelcomeShooseOption;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff', alignItems: 'center'},

  welcome: {
    color: '#4a5b86',
    fontSize: rf(3.5),
    fontWeight: '700',
    marginVertical: rh(4),
  },
  BNTbody: {justifyContent: 'center', alignItems: 'center'},
  chooseText: {
    color: '#797d85',
    fontSize: rf(2.5),
    fontWeight: '500',
    marginVertical: rh(2),
  },
});
