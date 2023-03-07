import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {rw, rf, rh} from '../../constent/responsivedimensions.js';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import {COLORS} from '../../constent/colors.js';
import BtnCom from '../../components/BtnCom.js';
import {comName} from '../../constent/componentName.js';
import {useSelector} from 'react-redux';
import InputCom from '../../components/InputCom.js';

const SeeAllHotels = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  const reduxHotelsData = useSelector(state => state.hotelsData.hotelsData);

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
      <InputCom
        placeholder={'Seach..'}
        leftIconName="search-outline"
        rightIconName={'mic-outline'}
        onChangeText={setSearch}
        value={search}
      />
      <View style={styles.hotelContentTitle}>
        <Text></Text>
        <Text style={styles.TypeTitle}>Popular</Text>
        <Text style={styles.catagorySeeAll}>See all</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scroll}>
          {reduxHotelsData.map(ele => (
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
                  <Text style={styles.reviews}>
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
  catagorySeeAll: {
    fontSize: rf(2),
    color: '#4fb8fe',
    fontWeight: '400',
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  TypeTitle: {
    fontSize: rf(2.7),
    fontWeight: '700',
    color: '#445682',
  },
  hotelContentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rh(1),
  },
});
