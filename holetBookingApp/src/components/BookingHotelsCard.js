import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import {imagePhat} from '../constent/imagePhat.js';
import {rf, rh, rw} from '../constent/responsivedimensions.js';
import BtnCom from './BtnCom.js';
import {COLORS} from '../constent/colors.js';
const {width} = Dimensions.get('window');

const BookingHotelsCard = () => {
  return (
    <View style={styles.contentBody}>
      <View style={styles.imageBody}>
        <Image source={imagePhat.cardImage_01} style={styles.image} />
      </View>
      <View style={styles.contentRight}>
        <Text style={styles.HotelName}>{'Hotel Cox'}</Text>
        <Text style={styles.location}>{`Cox's bazar`}</Text>

        <Text style={styles.price}>${'price'} per night</Text>
        <Text style={styles.reviews}>
          <Ionicon name="star" color={'#fccd37'} />
          <Ionicon name="star" color={'#fccd37'} />
          <Ionicon name="star" color={'#fccd37'} />
          <Ionicon name="star" color={'#fccd37'} />
          {`( ${'20'} Reviews)`}
        </Text>
        <BtnCom
          text={'Rebook'}
          containerStyle={styles.btnBody}
          textStyle={styles.btnText}
        />
      </View>
    </View>
  );
};

export default BookingHotelsCard;

const styles = StyleSheet.create({
  contentBody: {
    flexDirection: 'row',
    width: width,
    marginTop: rh(2),
    justifyContent: 'space-between',
  },
  imageBody: {
    height: rh(20),
    width: rw(40),
    overflow: 'hidden',
    borderRadius: rf(1),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  contentRight: {
    width: rw(50),
  },
  HotelName: {fontSize: rf(2.2), fontWeight: '700', color: '#495b86'},
  location: {
    fontSize: rf(1.8),
    fontWeight: '500',
    color: COLORS.grey,
    paddingBottom: rh(0.5),
  },
  discription: {fontSize: rf(1.5), color: COLORS.grey, paddingBottom: rh(0.5)},
  price: {fontSize: rf(1.6), color: COLORS.grey, paddingBottom: rh(0.5)},
  reviews: {
    fontSize: rf(1.9),
    color: COLORS.grey,
    fontWeight: '400',
    paddingBottom: rh(1),
  },
  btnBody: {width: '70%', height: rh(4.5)},
  btnText: {fontSize: rf(2.3)},
});
