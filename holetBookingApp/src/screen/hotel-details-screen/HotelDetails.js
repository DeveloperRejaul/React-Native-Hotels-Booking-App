import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import HeaderCom from '../../components/HeaderCom.jsx';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import {COLORS} from '../../constent/colors.js';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import Mrticon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {comName} from '../../constent/componentName.js';
import BtnCom from '../../components/BtnCom.js';

const HotelDetails = ({navigation, route}) => {
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <HeaderCom text={'Hotel Details'} onPress={() => navigation.goBack()} />

      <ScrollView>
        <View style={styles.scroll}>
          {/* Image part */}
          <View style={styles.imageBody}>
            <Image source={data.image} style={styles.image} />
          </View>
          <View style={styles.nameBody}>
            <Text style={styles.name}>{data.hotelName}</Text>
            <Text style={styles.location}>{data.location.name}</Text>
          </View>
          <Text>${data.price} per night</Text>

          <Text
            style={styles.reviews}
            onPress={() =>
              navigation.navigate(comName.reviews, {
                image: data.image,
                hotelName: data.hotelName,
                reviews: data.reviews,
              })
            }>
            <Ionicon name="star" color={'#fccd37'} />
            <Ionicon name="star" color={'#fccd37'} />
            <Ionicon name="star" color={'#fccd37'} />
            <Ionicon name="star" color={'#fccd37'} />
            {`( ${data.reviews.length} Reviews)`}
          </Text>

          <View>
            <Text style={[styles.name, styles.descriptionTitle]}>
              Description
            </Text>
            <Text style={[styles.description]}>{data.fullDiscription}</Text>
          </View>

          <>
            <Text style={[styles.name, styles.descriptionTitle]}>
              Amenities
            </Text>
            <View style={styles.amenities}>
              {data.amenities.tv && (
                <View style={styles.serviceBody}>
                  <Ionicon
                    size={rf(3.5)}
                    style={styles.serviceIcon}
                    name="tv-outline"
                  />
                  <Text style={styles.serviceText}>TV</Text>
                </View>
              )}
              {data.amenities.wifi && (
                <View style={styles.serviceBody}>
                  <Ionicon
                    size={rf(3.5)}
                    style={styles.serviceIcon}
                    name="wifi"
                  />
                  <Text style={styles.serviceText}>Wi-Fi</Text>
                </View>
              )}
              {data.amenities.ac && (
                <View style={styles.serviceBody}>
                  <Mrticon
                    size={rf(3.5)}
                    style={styles.serviceIcon}
                    name="air-conditioner"
                  />
                  <Text style={styles.serviceText}>AC</Text>
                </View>
              )}
              {data.amenities.ac && (
                <View style={styles.serviceBody}>
                  <Mrticon
                    size={rf(3.5)}
                    style={styles.serviceIcon}
                    name="bus-multiple"
                  />
                  <Text style={styles.serviceText}>Free Parking</Text>
                </View>
              )}
            </View>
          </>
          <>
            <Text style={[styles.name, styles.descriptionTitle]}>
              Roome Details
            </Text>
            <Text style={[styles.description]}>{data.roomDetals}</Text>
          </>
          <BtnCom
            containerStyle={styles.btn}
            text={'Book Room'}
            onPress={() =>
              navigation.navigate(comName.roomDetails, {
                rooms: data.rooms,
                name: data.hotelName,
                location: data.location,
                reviews: data.reviews,
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rw(4),
  },
  image: {height: '100%', width: '100%', resizeMode: 'cover'},
  imageBody: {
    width: '100%',
    height: rh(25),
    borderRadius: rf(1),
    overflow: 'hidden',
  },
  scroll: {
    paddingHorizontal: rw(2),
    paddingTop: rh(1),
  },
  nameBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: rh(1),
  },
  name: {fontSize: rf(2.2), fontWeight: '700', color: '#495b86'},
  location: {fontSize: rf(2), fontWeight: '500', color: COLORS.grey},
  reviews: {
    fontSize: rf(1.9),
    color: COLORS.grey,
    fontWeight: '400',
    paddingBottom: rh(1),
  },
  amenities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceBody: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIcon: {color: '#323c56'},
  serviceText: {color: COLORS.grey, fontSize: rf(2), fontWeight: '600'},
  descriptionTitle: {
    paddingVertical: rh(1),
  },
  description: {color: '#5e667a', fontSize: rf(1.8), fontWeight: '400'},
  btn: {marginTop: rh(3)},
});
