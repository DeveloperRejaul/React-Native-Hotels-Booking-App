import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {rf, rh} from '../../constent/responsivedimensions.js';

const YourProfile = () => {
  const state = useSelector(state => state.login.user);
  const {username, profileImage} = state;
  return (
    <View>
      {/* Header */}
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.imagePrifile}>
            <Image style={styles.image} source={{uri: profileImage}} />
          </View>
          <Text style={styles.profileName}>{username}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default YourProfile;
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rh(2),
  },
  title: {
    fontSize: rf(3),
    fontWeight: '700',
    paddingBottom: rh(2),
    color: '#405582',
  },
  imagePrifile: {
    height: rh(15),
    width: rh(15),
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: rf(2.2),
    color: '#405582',
    fontWeight: '700',
    paddingVertical: rh(1),
  },
});
