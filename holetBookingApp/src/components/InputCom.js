import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constent/colors.js';
import {rf, rh, rw} from '../constent/responsivedimensions.js';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';

const InputCom = ({
  lable,
  leftIconName,
  rightIconName,
  onChangeText,
  value,
  placeholder,
  onPress,
  secureTextEntry,
  style,
  keyboardType,
  lableStyle,
  inputTextStyle,
  placeholderColor,
  inputBodyStyle,
  defaultValue,
  editable,
  maxLength,
}) => {
  return (
    <View style={[style]}>
      {lable && <Text style={[styles.inputLable, lableStyle]}>{lable}</Text>}
      <View style={[styles.InputBody, inputBodyStyle]}>
        {leftIconName && (
          <Icon style={styles.icon} size={rf(3.2)} name={leftIconName} />
        )}
        <TextInput
          style={[
            styles.textInput,
            rightIconName && {
              width: '80%',
            },
            inputTextStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderColor ? placeholderColor : COLORS.grey
          }
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          editable={editable}
          maxLength={maxLength}
        />
        {rightIconName && (
          <Icon
            onPress={onPress}
            // style={styles.icon}
            size={rf(3)}
            name={rightIconName}
          />
        )}
      </View>
    </View>
  );
};

export default InputCom;

const styles = StyleSheet.create({
  inputLable: {
    fontSize: rf(2),
    color: COLORS.grey,
    fontWeight: '400',
    paddingLeft: rw(3),
  },
  InputBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3a4',
    borderRadius: rf(2.5),
    paddingHorizontal: rw(5),
    width: '100%',
    height: rh(6),
    justifyContent: 'space-between',
  },
  icon: {
    width: '10%',
  },
  textInput: {
    width: '90%',
    height: '100%',
    fontSize: rf(2),
    color: COLORS.grey,
    fontWeight: '400',
  },
});
