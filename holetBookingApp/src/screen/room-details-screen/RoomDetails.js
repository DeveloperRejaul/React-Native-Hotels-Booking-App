import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {rw, rf, rh} from '../../constent/responsivedimensions.js';
import HeaderCom from '../../components/HeaderCom.jsx';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import {comName} from '../../constent/componentName.js';
import {COLORS} from '../../constent/colors.js';
import BtnCom from '../../components/BtnCom.js';

const RoomDetails = ({navigation, route}) => {
  const {rooms, name, location, reviews} = route.params;

  return (
    <View style={styles.container}>
      <HeaderCom text={'Room Details'} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scroll}>
          {rooms.map(ele => (
            <View style={styles.card} key={Math.random()}>
              {/* Image part */}
              <View style={styles.imageBody}>
                <Image source={ele.image} style={styles.image} />
              </View>
              <View style={styles.nameBody}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location.name}>{location.name}</Text>
              </View>
              <Text>{ele.roomeType}</Text>

              <View style={styles.btnBody}>
                <View>
                  <Text>${ele.price} per night</Text>
                  <Text
                    style={styles.reviews}
                    onPress={() =>
                      navigation.navigate(comName.reviews, {
                        image: ele.image,
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
                <BtnCom
                  text={'Book Now'}
                  containerStyle={styles.btn}
                  textStyle={styles.btnText}
                  onPress={() => navigation.navigate(comName.selectDate)}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RoomDetails;
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
