import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import InputCom from '../../components/InputCom.js';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import {users} from '../../constent/usersData.js';
import {comName} from '../../constent/componentName.js';

const Message = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.pH}>
            <InputCom
              placeholder={'Seach..'}
              leftIconName="search-outline"
              rightIconName={'mic-outline'}
              onChangeText={setSearch}
              value={search}
            />
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.activeUserContainer}>
              {users
                .filter(data => data.active === true)
                .map(ele => (
                  <View style={styles.activeUsers} key={ele.id}>
                    <View style={styles.imageBody}>
                      <Image source={ele.profilePictur} style={styles.image} />
                    </View>
                    <View style={styles.active} />
                    <Text style={[styles.userName]}>{ele.userName}</Text>
                  </View>
                ))}
            </View>
          </ScrollView>

          {users.map(data => (
            <Pressable
              onPress={() =>
                navigation.navigate(comName.chatUI, {
                  name: data.userName,
                  profilePictur: data.profilePictur,
                })
              }
              key={data.id}
              style={styles.innerContainer}>
              <View style={styles.activeUsers}>
                <View style={styles.imageBody}>
                  <Image source={data.profilePictur} style={styles.image} />
                </View>
                {data.active && <View style={styles.active} />}
                <Text></Text>
              </View>
              <View>
                <Text style={[styles.userName, styles.userName2]}>
                  {data.userName}
                </Text>
                <Text style={styles.chatSMG}>{data.chatSMG[0]}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: rh(1),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageBody: {
    height: rh(7),
    width: rh(7),
    borderRadius: 100,
    overflow: 'hidden',
  },
  activeUsers: {
    marginHorizontal: rw(2),
    width: rh(7),
    position: 'relative',
  },
  activeUserContainer: {
    flexDirection: 'row',
    marginTop: rh(1),
  },
  userName: {
    textAlign: 'center',
    color: '#000',
    fontSize: rf(2),
    fontWeight: '500',
  },
  pH: {
    paddingHorizontal: rw(4),
  },
  active: {
    height: rh(1.5),
    width: rh(1.5),
    backgroundColor: COLORS.active,
    borderRadius: 100,
    position: 'absolute',
    top: '55%',
    left: '75%',
  },
  innerContainer: {
    paddingHorizontal: rh(2),
    paddingTop: rh(2),
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  userName2: {
    fontWeight: '700',
  },
  chatSMG: {
    fontSize: rf(1.5),
    fontWeight: '600',
  },
});
