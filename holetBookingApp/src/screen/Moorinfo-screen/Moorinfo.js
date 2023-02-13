import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../../constent/colors.js';
import {imagePhat} from '../../constent/imagePhat.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import IoniIcon from 'react-native-vector-icons/Ionicons.js';
import MrtIcon from 'react-native-vector-icons/MaterialIcons.js';
import EntIcon from 'react-native-vector-icons/Entypo.js';
import OctIcon from 'react-native-vector-icons/Octicons.js';
import {comName} from '../../constent/componentName.js';
import {useDispatch} from 'react-redux';
import {handelLogout} from '../../redux/features/login/loginSlice.js';

const Moorinfo = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* Body */}
      <View style={styles.body}>
        <Pressable
          style={styles.btnCon}
          onPress={() => navigation.navigate(comName.YourProfile)}>
          <IoniIcon style={styles.btnIcon} size={rf(3)} name="person-outline" />
          <Text style={styles.btnText}>Your Profile</Text>
        </Pressable>
        <Pressable
          style={styles.btnCon}
          onPress={() => navigation.navigate(comName.editProfile)}>
          <OctIcon style={styles.btnIcon} size={rf(3)} name="pencil" />
          <Text style={styles.btnText}>Edit Profile</Text>
        </Pressable>
        <Pressable
          style={styles.btnCon}
          onPress={() => navigation.navigate(comName.createHotelPost)}>
          <OctIcon style={styles.btnIcon} size={rf(3)} name="plus-circle" />
          <Text style={styles.btnText}>Create Hotel Post</Text>
        </Pressable>
        <Pressable style={styles.btnCon}>
          <IoniIcon
            style={styles.btnIcon}
            size={rf(3)}
            name="ios-settings-outline"
          />
          <Text style={styles.btnText}>Setting</Text>
        </Pressable>
        <Pressable style={styles.btnCon}>
          <IoniIcon
            style={styles.btnIcon}
            size={rf(3)}
            name="notifications-outline"
          />
          <Text
            style={styles.btnText}
            onPress={() => navigation.navigate(comName.notification)}>
            Notification
          </Text>
        </Pressable>
        <Pressable style={styles.btnCon}>
          <MrtIcon
            style={styles.btnIcon}
            size={rf(3)}
            name="favorite-outline"
          />
          <Text
            style={styles.btnText}
            onPress={() => navigation.navigate(comName.favorit)}>
            Favorite
          </Text>
        </Pressable>
        <Pressable style={styles.btnCon}>
          <EntIcon style={styles.btnIcon} size={rf(3)} name="info" />
          <Text style={styles.btnText}>Help</Text>
        </Pressable>
        <Pressable
          style={styles.btnCon}
          onPress={() => dispatch(handelLogout())}>
          <MrtIcon style={styles.btnIcon} size={rf(3)} name="logout" />
          <Text style={styles.btnText}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Moorinfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  btnCon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rh(2),
  },
  btnText: {
    paddingLeft: rw(5),
    fontSize: rf(2.4),
    fontWeight: '600',
    color: COLORS.grey,
  },
  btnIcon: {
    color: '#659ff5',
  },
  body: {
    paddingHorizontal: rw(6),
  },
});
