import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {rf, rh} from '../constent/responsivedimensions.js';
import {imagePhat} from '../constent/imagePhat.js';
import {COLORS} from '../constent/colors.js';

const LogoCom = ({containerStyle, logoStyle, textStyle}) => {
  return (
    <View style={[styles.logoBody, containerStyle]}>
      <Image style={[styles.logoImage, logoStyle]} source={imagePhat.appLogo} />
      <Text style={[styles.logoText, textStyle]}>HOTEL</Text>
    </View>
  );
};

export default LogoCom;

const styles = StyleSheet.create({
  logoImage: {height: rh(7), width: rh(10)},
  logoBody: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rh(2),
    paddingVertical: rh(5),
  },

  logoText: {color: COLORS.green, fontSize: rf(3.8), fontWeight: 'bold'},
});
