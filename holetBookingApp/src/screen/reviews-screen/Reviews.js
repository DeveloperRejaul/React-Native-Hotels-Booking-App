import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import HeaderCom from '../../components/HeaderCom.jsx';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import IoniIcon from 'react-native-vector-icons/Ionicons.js';
import {imagePhat} from '../../constent/imagePhat.js';

const Reviews = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderCom text={'Review Booking'} onPress={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scroll}>
          {[1, 2, 3, 4, 5, 6].map(ele => (
            <View key={Math.random()} style={styles.card}>
              <View style={styles.imageBody}>
                <Image source={imagePhat.cardImage_01} style={styles.image} />
              </View>
              <View style={styles.contentBody}>
                <IoniIcon
                  name="checkmark-circle"
                  size={rf(3)}
                  color={'#4791f2'}
                />
                <View style={styles.contentInner}>
                  <Text style={styles.name}> {`Hotel Cox`}</Text>
                  <Text style={styles.reviews}>{'very expencive '}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: rw(3),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  scroll: {
    paddingBottom: rh(5),
    width: '100%',
    paddingHorizontal: rw(4),
    paddingTop: rh(2),
  },
  card: {
    width: '100%',
    alignItems: 'center',
    marginBottom: rh(3),
    paddingHorizontal: rw(4),
  },
  imageBody: {
    height: rh(15),
    width: rh(15),
    borderRadius: rf(1),
    overflow: 'hidden',
  },
  contentBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: rf(2),
    color: '#455a81',
    fontWeight: '700',
  },
  reviews: {
    fontSize: rf(2),
    color: COLORS.grey,
    fontWeight: '400',
  },
  contentInner: {
    paddingLeft: rw(4),
  },
});
