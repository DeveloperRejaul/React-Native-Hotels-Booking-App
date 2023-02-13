import {Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {rf} from '../../../constent/responsivedimensions.js';
import {styles} from '../styles.js';
import {useNavigation} from '@react-navigation/native';

export default function Header({profilePictur, name}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, styles.fdr]}>
      <View style={[styles.fdr, styles.acountBody]}>
        <Icon
          color={'#aa00ff'}
          size={rf(3.8)}
          name={'chevron-back'}
          onPress={() => navigation.goBack()}
        />
        <Image style={styles.image} source={profilePictur} />
        <View style={styles.nameBody}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.activeStatus}>active 3 hours ago</Text>
        </View>
      </View>
      <View style={[styles.fdr, styles.callBody]}>
        <Icon color={'#aa00ff'} size={rf(3.8)} name={'call'} />
        <Icon color={'#aa00ff'} size={rf(3.8)} name={'ios-videocam'} />
        <Icon color={'#aa00ff'} size={rf(3.8)} name={'alert-circle'} />
      </View>
    </View>
  );
}
