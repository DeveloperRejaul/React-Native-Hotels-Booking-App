import {View, FlatList, Text} from 'react-native';
import React, {useState, useCallback} from 'react';
import {styles} from '../styles.js';
import Header from './Header.js';
import Footer from './Footer.js';
import ChatBody from './ChatBody.js';

const ChatUI = ({navigation, route}) => {
  const {name, profilePictur} = route.params;
  const [messages, setmessages] = useState([
    {
      text: '',
      imageUri: '',
      dataType: 'Image',
      userType: '',
    },
  ]);
  const [textInput, setTextInput] = useState();

  const sendSMS = () => {
    setmessages(pre => [
      ...pre,
      {text: textInput, dataType: 'text', userType: 'send'},
    ]);
    setTextInput('');
  };

  const reciveSMS = () => {
    setmessages(pre => [
      ...pre,
      {text: textInput, dataType: 'text', userType: 'recive'},
    ]);
    setTextInput('');
  };

  const handelImagePhat = useCallback(async data => {
    const filedata = await data.assets.map(val => val.uri);
    setmessages(pre => [
      ...pre,
      {imageUri: filedata[0], dataType: 'image', userType: 'send'},
    ]);
  }, []);

  const handelCameraPhat = useCallback(async data => {
    const filedata = await data.assets.map(val => val.uri);
    setmessages(pre => [
      ...pre,
      {imageUri: filedata[0], dataType: 'image', userType: 'send'},
    ]);
  }, []);

  return (
    <>
      <Header profilePictur={profilePictur} name={name} />
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={x => x.id}
          renderItem={({item, index}) => <ChatBody {...{item, index}} />}
          inverted
        />

        <Text onPress={reciveSMS}>Recive</Text>
        <Footer
          onPress={sendSMS}
          onChangeText={setTextInput}
          inputValue={textInput}
          handelImagePhat={handelImagePhat}
          handelCameraPhat={handelCameraPhat}
        />
      </View>
    </>
  );
};

export default ChatUI;
