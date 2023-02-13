import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {rw, rf, rh} from '../../constent/responsivedimensions.js';
import HeaderCom from '../../components/HeaderCom.jsx';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import {COLORS} from '../../constent/colors.js';
import BtnCom from '../../components/BtnCom.js';
import {imagePhat} from '../../constent/imagePhat.js';
import {comName} from '../../constent/componentName.js';

const SeeAllHotels = ({navigation, route}) => {
  // Navigate to hotel details screen
  const hotelDetails = data => {
    navigation.navigate(comName.hotelDetails, {
      data: data,
    });
  };

  // Navigate to Rooms details screen
  const bookRoom = data => {
    navigation.navigate(comName.roomDetails, {
      rooms: data.rooms,
      name: data.hotelName,
      location: data.location,
      reviews: data.reviews,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderCom
        text={route.params.title}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scroll}>
          {route.params.data.map(ele => (
            <View style={styles.card} key={Math.random()}>
              {/* Image part */}
              <View style={styles.imageBody}>
                <Pressable onPress={() => hotelDetails(ele)}>
                  <Image source={ele.image} style={styles.image} />
                </Pressable>
              </View>
              <View style={styles.nameBody}>
                <Text onPress={() => hotelDetails(ele)} style={styles.name}>
                  {ele.hotelName}
                </Text>
                <Text style={styles.location}>{ele.location.name}</Text>
              </View>
              <View style={styles.btnBody}>
                <View>
                  <Text>${ele.price} per night</Text>
                  <Text
                    style={styles.reviews}
                    onPress={() =>
                      navigation.navigate(comName.reviews, {
                        image: ele.image,
                        hotelName: ele.hotelName,
                        reviews: ele.reviews,
                      })
                    }>
                    <Ionicon name="star" color={'#fccd37'} />
                    <Ionicon name="star" color={'#fccd37'} />
                    <Ionicon name="star" color={'#fccd37'} />
                    <Ionicon name="star" color={'#fccd37'} />
                    {`( 5 Reviews)`}
                  </Text>
                </View>
                <BtnCom
                  text={'Book Room'}
                  containerStyle={styles.btn}
                  textStyle={styles.btnText}
                  onPress={() => bookRoom(ele)}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SeeAllHotels;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rw(4),
  },
  scroll: {
    paddingHorizontal: rw(2),
    paddingVertical: rh(2),
  },
  imageBody: {
    width: '100%',
    height: rh(25),
    borderRadius: rf(1),
    overflow: 'hidden',
  },
  image: {height: '100%', width: '100%', resizeMode: 'cover'},
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
    width: rw(40),
  },
  btnBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: rw(45),
    height: rh(5),
  },
  btnText: {fontSize: rf(2.2)},
  card: {paddingBottom: rh(2)},
});
