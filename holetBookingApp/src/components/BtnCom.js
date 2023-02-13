import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {rf, rh, rw} from '../constent/responsivedimensions.js';
import {COLORS} from '../constent/colors.js';
import {Spinner} from 'native-base';

const BtnCom = ({onPress, text, containerStyle, textStyle, loading}) => {
  return (
    <TouchableOpacity
      style={[styles.ChooseBTN, containerStyle]}
      onPress={onPress}>
      {loading === true ? (
        <Spinner color="white" />
      ) : (
        <Text style={[styles.ChooseBTNText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default BtnCom;

const styles = StyleSheet.create({
  ChooseBTN: {
    backgroundColor: COLORS.green,
    width: rw(90),
    height: rh(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rf(2.5),
    marginBottom: rh(2.5),
  },
  ChooseBTNText: {color: '#fff', fontSize: rf(2.4), fontWeight: '500'},
});
