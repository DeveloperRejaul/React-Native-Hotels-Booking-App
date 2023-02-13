import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputCom from '../../../components/InputCom.js';
import useStyle from '../useStyle.js';
import {useState} from 'react';
import {formValidation} from '../../../utilities/formValidationClass.js';

const UserName = () => {
  const [fullName, onChangeName] = useState('');
  const styles = useStyle();

  const handelUserName = value => {
    onChangeName(value);
    formValidation.userName(value);
  };

  return (
    <>
      {/* Name input part */}
      <InputCom
        lable={'Name'}
        leftIconName="person-outline"
        placeholder="Rejaul"
        onChangeText={handelUserName}
        value={fullName}
        style={styles.inputCom}
      />
    </>
  );
};

export default UserName;

const styles = StyleSheet.create({});
