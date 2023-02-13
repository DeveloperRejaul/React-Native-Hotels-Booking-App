import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import BtnCom from '../../../components/BtnCom.js';
import {rf, rh, rw} from '../../../constent/responsivedimensions.js';
import {COLORS} from '../../../constent/colors.js';

export default function OnboardingCom({
  onPress,
  imagePhat,
  indicator1,
  indicator2,
  indicator3,
  btnText,
}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View>
        <Image source={imagePhat} />
      </View>
      <View style={styles.dotBody}>
        <View style={[styles.dot, indicator1]}></View>
        <View style={[styles.dot, indicator2]}></View>
        <View style={[styles.dot, indicator3]}></View>
      </View>
      <Text style={styles.title}>Get your hotel now</Text>
      <Text style={styles.subTitle}>
        Find your hotel of your choice and get it right now
      </Text>
      <BtnCom text={btnText} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rw(10),
  },
  dot: {
    height: rw(3),
    width: rw(3),
    backgroundColor: '#e2e2e2',
    borderRadius: 100,
    marginHorizontal: rw(1),
  },
  dotBody: {
    flexDirection: 'row',
    paddingVertical: rh(1),
  },
  title: {
    fontSize: rf(3.5),
    fontWeight: '700',
    color: '#182e66',
    paddingVertical: rh(1),
  },
  subTitle: {
    fontSize: rf(2.2),
    fontWeight: '500',
    color: COLORS.grey,
    textAlign: 'center',
    paddingVertical: rh(1),
    paddingBottom: rh(3),
  },
});
