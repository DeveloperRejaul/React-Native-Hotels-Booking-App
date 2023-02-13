import {Image, View, Text} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../styles.js';

const ChatBody = ({item, index}) => {
  if (item.dataType == 'image') {
    if (item.imageUri !== '') {
      return (
        <View style={styles.chatImageBody}>
          <Image
            key={index}
            source={{uri: item.imageUri}}
            style={styles.chatImage}
          />
        </View>
      );
    }
  } else if (item.dataType === 'text') {
    if (item.text !== '') {
      return (
        <Text
          style={item.userType === 'send' ? styles.sendSMS : styles.reciveSMS}>
          {item.text}
        </Text>
      );
    }
  }
};

export default memo(ChatBody);
