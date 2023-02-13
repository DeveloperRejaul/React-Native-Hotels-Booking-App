import React, {memo, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTimeout(
      () =>
        setMessages(msgs => [
          {
            id: new Date().getTime(),
            type: 'receive',
            text: 'hey! how are you?',
          },
          ...msgs,
        ]),
      1000,
    );
  }, []);
  const sendMsg = () => {
    setMessages([
      {id: new Date().getTime(), type: 'send', text: message},
      ...messages,
    ]);
    setMessage('');
  };
  const receiveMsg = () => {
    setMessages([
      {id: new Date().getTime(), type: 'receive', text: message},
      ...messages,
    ]);
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={x => x.id}
        renderItem={({item, index}) => <ChatItemMemo {...{item, index}} />}
        inverted
        contentContainerStyle={styles.listStyle}
      />
      <View style={styles.bottom}>
        <Button
          title="Receive"
          onPress={receiveMsg}
          disabled={message.length === 0}
        />
        <TextInput
          style={styles.input}
          value={message}
          placeholder="Type your message"
          onChangeText={setMessage}
        />
        <Button
          title="Send"
          onPress={sendMsg}
          disabled={message.length === 0}
        />
      </View>
    </View>
  );
}
function ChatItem({item}) {
  return (
    <View
      style={[
        styles.chatItemCommon,
        item.type === 'send' ? styles.send : styles.receive,
      ]}>
      <Text style={styles.msgtxt}>{item.text}</Text>
    </View>
  );
}
// put you logic of rerendering here (major part for performance)
const ChatItemMemo = memo(ChatItem, (prevProps, nextProps) => true);
const styles = StyleSheet.create({
  container: {flex: 1},
  bottom: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  chatItemCommon: {marginBottom: 2},
  send: {alignSelf: 'flex-end'},
  receive: {alignSelf: 'flex-start'},
  msgtxt: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    maxWidth: '75%',
  },
  listStyle: {paddingHorizontal: 10, paddingBottom: 20},
});
