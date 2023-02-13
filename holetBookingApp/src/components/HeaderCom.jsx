import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {rf, rh, rw} from '../constent/responsivedimensions.js';

const HeaderCom = ({
  onRightBTN,
  text,
  onPress,
  textRight,
  textRightStyle,
  headerTitle,
  style,
}) => {
  return (
    <Pressable style={[styles.header, style]}>
      <Icon
        onPress={onPress}
        color={'#656d7f'}
        size={rf(3.8)}
        name={'chevron-back'}
      />
      <Text style={[styles.headerText, headerTitle]}>{text}</Text>
      <Text onPress={onRightBTN} style={textRightStyle}>
        {textRight}
      </Text>
    </Pressable>
  );
};

export default HeaderCom;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: rh(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rh(1),
    marginTop: rh(1),
  },
  headerText: {
    fontSize: rf(2.7),
    fontWeight: '700',
    color: '#5f7094',
    marginLeft: -rw(8),
  },
});
