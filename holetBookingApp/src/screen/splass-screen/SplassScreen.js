import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {imagePhat} from '../../constent/imagePhat.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import {COLORS} from '../../constent/colors.js';
import {useDispatch} from 'react-redux';
import {handelSplass} from '../../redux/features/splass/splassSlice.js';

export default function SplassScreen() {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(handelSplass());
  }, 1000);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.imageBody}>
        <Image source={imagePhat.appLogo} style={styles.image} />
      </View>
      <Text style={styles.text}>HOTEL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageBody: {height: rh(7), width: rw(21)},
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    fontSize: rf(4),
    fontWeight: '800',
    color: COLORS.green,
  },
});
