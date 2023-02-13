import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, memo} from 'react';
import websocket from '../../socket/socketio.service.js';
import ChatItemMemo from './ChatItemMemo.js';

const Search = () => {
  const [inputData, setinputData] = useState('');
  const [serData, setSerData] = useState([]);

  useEffect(() => {
    websocket.InitializeSocket();
  }, []);

  const handelInput = text => {
    setinputData(text);
  };

  const sendData = () => {
    websocket.emit('chat_message', inputData);
    websocket.on('server_text', text => {
      setSerData([text, ...serData]);
    });
    setinputData('');
    console.log(serData);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>Search1</Text>
      <TextInput
        value={inputData}
        onChangeText={text => handelInput(text)}
        style={{borderWidth: 1, color: '#000'}}
        placeholder="Enter some text"
      />
      <TouchableOpacity onPress={sendData}>
        <Text style={{color: '#000'}}>Add Data</Text>
      </TouchableOpacity>

      <ScrollView>
        <ChatItemMemo {...{serData}} />
      </ScrollView>
    </View>
  );
};
export default Search;
