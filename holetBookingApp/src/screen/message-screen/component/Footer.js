import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons.js';
import AntIcon from 'react-native-vector-icons/AntDesign.js';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {rf} from '../../../constent/responsivedimensions.js';
import {COLORS} from '../../../constent/colors.js';
import {Pressable} from 'native-base';
import {styles} from '../styles.js';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Footer = ({
  onPress,
  onChangeText,
  inputValue,
  handelImagePhat,
  handelCameraPhat,
}) => {
  const [inputFocus, setinputFocus] = useState(false);

  const handelOpenImage = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    handelImagePhat(result);
  };

  const handelOpenCamera = async () => {
    const result = await launchCamera();
    handelCameraPhat(result);
  };

  return (
    <View style={[styles.typeingContainer, styles.fdr]}>
      {!inputFocus ? (
        <>
          <Icon color={COLORS.green} size={rf(3)} name={'ios-grid'} />
          <Pressable onPress={handelOpenCamera}>
            <Icon color={COLORS.green} size={rf(3.8)} name={'camera'} />
          </Pressable>
          <Pressable onPress={handelOpenImage}>
            <Icon color={COLORS.green} size={rf(3.2)} name={'md-image'} />
          </Pressable>
          <Icon color={COLORS.green} size={rf(3.6)} name={'mic'} />
        </>
      ) : (
        <Pressable onPress={() => setinputFocus(false)}>
          <Icon color={COLORS.green} size={rf(3.6)} name={'chevron-forward'} />
        </Pressable>
      )}

      <Pressable
        style={[
          styles.fdr,
          inputFocus ? styles.textInputBodyfocus : styles.textInputBody,
        ]}
        onPress={() => setinputFocus(true)}>
        <TextInput
          style={[inputFocus ? styles.textInputfocus : styles.textInput]}
          onFocus={() => setinputFocus(true)}
          placeholder="Message"
          onChangeText={onChangeText}
          value={inputValue}
          onBlur={() => setinputFocus(false)}
          multiline={true}
        />
        <MCIcon color={COLORS.green} size={rf(3)} name={'emoticon'} />
      </Pressable>
      <View>
        {inputValue !== '' ? (
          <Pressable onPress={onPress}>
            <Icon color={COLORS.green} size={rf(3)} name={'send'} />
          </Pressable>
        ) : (
          <Pressable>
            <AntIcon color={COLORS.green} size={rf(3)} name={'like1'} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Footer;
