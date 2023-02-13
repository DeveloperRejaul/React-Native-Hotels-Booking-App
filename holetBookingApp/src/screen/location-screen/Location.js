import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import HeaderCom from '../../components/HeaderCom.jsx';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import BtnCom from '../../components/BtnCom.js';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import Enticon from 'react-native-vector-icons/Entypo.js';
import {COLORS} from '../../constent/colors.js';
import {comName} from '../../constent/componentName.js';
import hotelDataValidator from '../../utilities/hotelsValidation.js';
import MapViewDirections from 'react-native-maps-directions';

const Location = ({navigation, route}) => {
  const {name, location, discription, price, reviews, image} = route.params;
  const newDiscription = hotelDataValidator.stringData(discription, 10);

  const coordinates = [
    {
      latitude: 21.41648,
      longitude: 92.00563,
    },
    {
      latitude: 21.4075796,
      longitude: 92.014903,
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderCom text={'Location'} onPress={() => navigation.goBack()} />
      <View style={styles.mapBody}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: coordinates[0].latitude,
            longitude: coordinates[0].longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}
          // onRegionChangeComplete={region => setRegion(region)}
        >
          {/* Something worning heare */}
          {/* <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={'AIzaSyA3WvTUQcHEptyrhn5c-VR2DXgqc__18FY'}
            strokeWidth={4}
            strokeColor="#111111"
          /> */}
          <Marker coordinate={coordinates[0]} />
          <Marker coordinate={coordinates[1]} />
        </MapView>
      </View>
      <View style={styles.contentBody}>
        <View style={styles.imageBody}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.contentRight}>
          <Text style={styles.HotelName}>{name}</Text>
          <Text style={styles.location}>{location.name}</Text>

          <Text style={styles.discription}>{newDiscription}</Text>
          <Text style={styles.price}>${price} per night</Text>
          <Text
            style={styles.reviews}
            onPress={() =>
              navigation.navigate(comName.reviews, {
                image: image,
                hotelName: name,
                reviews: reviews,
              })
            }>
            <Ionicon name="star" color={'#fccd37'} />
            <Ionicon name="star" color={'#fccd37'} />
            <Ionicon name="star" color={'#fccd37'} />
            <Ionicon name="star" color={'#fccd37'} />
            {`( ${reviews.length} Reviews)`}
          </Text>
        </View>
      </View>
      <View style={styles.woringBody}>
        <Text style={styles.woringTitle}>Things to know</Text>
        <View style={{flexDirection: 'row'}}>
          <Enticon
            name={'controller-record'}
            color={COLORS.green}
            size={rf(1.8)}
          />
          <Text style={styles.woringText}>No smoking</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Enticon
            name={'controller-record'}
            color={COLORS.green}
            size={rf(1.8)}
          />
          <Text style={styles.woringText}>Pet not allowed</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Enticon
            name={'controller-record'}
            color={COLORS.green}
            size={rf(1.8)}
          />
          <Text style={styles.woringText}>No lode music</Text>
        </View>
      </View>
      <View style={styles.button}>
        <BtnCom text={'Book Rome'} />
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  mapBody: {
    height: rh(40),
    width: '96%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  reviews: {
    fontSize: rf(1.9),
    color: COLORS.grey,
    fontWeight: '400',
    paddingBottom: rh(1),
  },
  contentBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rw(2),
    marginTop: rh(2),
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
  woringBody: {marginVertical: rh(1), paddingHorizontal: rw(2)},
  woringTitle: {
    paddingVertical: rh(1.5),
    fontSize: rf(2.4),
    fontWeight: '700',
    color: '#495b86',
  },
  woringText: {
    color: COLORS.grey,
    fontWeight: '500',
    fontSize: rf(1.8),
    marginLeft: rw(2),
  },
  button: {
    alignItems: 'center',
    paddingVertical: rh(2),
  },
  dootIcon: {},
});
