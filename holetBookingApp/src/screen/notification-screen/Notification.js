import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import HeaderCom from '../../components/HeaderCom.jsx';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import IoniIcon from 'react-native-vector-icons/Ionicons.js';
const rendomData = require('./data.json');

const Notification = ({navigation}) => {
  const [data, setdata] = useState(rendomData);

  // select data handel
  const heandelSelect = (id, type) => {
    const newArray = data.map(e => {
      if (e.id == id) {
        return {...e, selected: type};
      } else {
        return {...e};
      }
    });

    setdata(newArray);
  };

  // handel Clear all button
  const hendelClearAll = () => {
    const newArray = data.filter(val => val.selected !== true);
    setdata(newArray);
  };

  return (
    <View style={styles.container}>
      <HeaderCom
        textRightStyle={[styles.headerRight]}
        text={'Notification'}
        textRight={'Clear All'}
        headerTitle={[styles.headerTitle]}
        onPress={() => navigation.goBack()}
        onRightBTN={hendelClearAll}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.date}>New</Text>
          {data.map((e, i) => (
            <View key={i} style={styles.card}>
              <Pressable
                style={styles.selecteBtn}
                onPress={() => heandelSelect(e.id, !e.selected)}>
                <IoniIcon
                  color={'#68a2f5'}
                  size={rf(3)}
                  name={
                    e.selected ? 'checkmark-circle' : 'checkmark-circle-outline'
                  }
                />
              </Pressable>
              <View style={styles.dataBody}>
                <Text style={styles.title}>{e.title}</Text>
                <Text style={styles.text}>{e.text}</Text>
              </View>
              <IoniIcon
                style={styles.notificationIcon}
                size={rf(3)}
                name="notifications-outline"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: rw(4),
  },
  headerRight: {
    fontSize: rf(2),
    textDecorationLine: 'underline',
    fontWeight: '600',
    color: '#4fb8fe',
  },
  headerTitle: {
    marginLeft: 0,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: rh(10),
    marginBottom: rh(2),
    backgroundColor: '#f8f9ff',
    padding: rf(1),
    borderRadius: rf(1),
  },
  selecteBtn: {
    width: '12%',
  },
  dataBody: {
    width: '80%',
  },
  notificationIcon: {
    width: '8%',
  },
  date: {
    fontSize: rf(2.6),
    fontWeight: '700',
    color: '#485a85',
    marginBottom: rh(1.5),
  },
  title: {
    fontSize: rf(2.2),
    color: '#3f4c6ba8',
    fontWeight: '600',
  },
  text: {
    fontSize: rf(2),
    color: '#3f4c6ba8',
    fontWeight: '400',
  },
});
