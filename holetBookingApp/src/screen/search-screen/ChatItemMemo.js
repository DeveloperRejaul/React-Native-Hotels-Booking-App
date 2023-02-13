import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const ChatItemMemo = ({serData}) => {
  console.log(serData);
  return (
    <View>
      {serData.map(ele => (
        <Text>{ele}</Text>
      ))}
    </View>
  );
};

export default memo(ChatItemMemo);

const styles = StyleSheet.create({});
