import {Pressable, ScrollView, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import useHomeStyle from './useHomeStyle.js';
import {rf} from '../../constent/responsivedimensions.js';
import {catagoryData} from '../../constent/catagoryData.js';
import {COLORS} from '../../constent/colors.js';
import MrtIcon from 'react-native-vector-icons/MaterialIcons.js';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import {comName} from '../../constent/componentName.js';
import hotelDataValidator from '../../utilities/hotelsValidation.js';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ToletCom = ({}) => {
  const state = useSelector(state => state);
  const {hotelsData} = state.hotelsData;
  const [selectCatagory, setCelectCatagory] = useState('All hotels');
  const [hotels, sethotels] = useState(hotelsData);
  const styles = useHomeStyle();
  const navigation = useNavigation();

  // Hande favorite hotels in this function
  const handelFavorite = (id, type) => {
    const newHotelsData = hotels.map(ele => {
      if (ele.id === id) {
        return {...ele, favorit: type};
      } else {
        return {...ele};
      }
    });
    sethotels(newHotelsData);
  };

  // Handel Catagory
  const handelCatagory = catagoryName => {
    setCelectCatagory(catagoryName);
    const newHotel = hotelDataValidator.hotelData(catagoryName, hotelsData);
    sethotels(newHotel);
  };

  return (
    <View>
      {/* Catagory View */}
      <View>
        <View style={styles.catagoryHader}>
          <Text></Text>
          <Text style={styles.chooseTitle}>Choose Hotel</Text>
          <Pressable
            onPress={() =>
              navigation.navigate(comName.seeAllHotels, {
                title: selectCatagory,
                data: hotels,
              })
            }>
            <Text style={styles.catagorySeeAll}>See all</Text>
          </Pressable>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollView}>
            {catagoryData.map(e => (
              <Pressable
                style={styles.catagory}
                key={Math.random()}
                onPress={() => handelCatagory(e)}>
                <Text
                  style={[
                    styles.catagoryText,
                    {
                      color: e === selectCatagory && COLORS.green,
                    },
                  ]}>
                  {e}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* All Flat */}
      <View>
        {/* Cards View start */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardBody}>
            {hotels.map(e => (
              <View style={styles.card} key={Math.random()}>
                <View style={styles.cardImageBody}>
                  <Pressable
                    style={styles.imageBtn}
                    onPress={() =>
                      navigation.navigate(comName.hotelDetails, {
                        data: e,
                      })
                    }>
                    <Image source={e.image} style={styles.cardImage} />
                  </Pressable>
                  <Pressable
                    style={[styles.bookMarkBTN]}
                    onPress={() => handelFavorite(e.id, !e.favorit)}>
                    <MrtIcon
                      name={'favorite'}
                      size={rf(5)}
                      color={e.favorit ? '#4791f3' : '#fff'}
                    />
                  </Pressable>
                  {/*  */}
                  <View style={styles.imageBackgrount}></View>

                  <Pressable
                    style={styles.contentBody}
                    onPress={() =>
                      navigation.navigate(comName.hotelDetails, {
                        data: e,
                      })
                    }>
                    <Text style={styles.HotelName}>{e.hotelName}</Text>
                    <Text style={styles.HotelDiscription}>
                      {e.shourtDiscription}
                    </Text>
                    <View style={[styles.row, styles.itemsBody]}>
                      <Pressable
                        onPress={() =>
                          navigation.navigate(comName.location, {
                            name: e.hotelName,
                            location: e.location,
                            discription: e.shourtDiscription,
                            price: e.price,
                            reviews: e.reviews,
                            image: e.image,
                          })
                        }
                        style={[styles.row, styles.items]}>
                        <Ionicon
                          color={COLORS.white}
                          size={rf(3)}
                          name="location"
                        />
                        <Text style={styles.itemText}>{e.location.name}</Text>
                      </Pressable>
                      <View style={[styles.row, styles.items]}>
                        <Text style={styles.itemText}>{'$' + e.price}</Text>
                      </View>
                      <View style={[styles.row, styles.items]}>
                        <Ionicon color={'#f2ba08'} size={rf(3)} name="star" />
                        <Text style={styles.itemText}>{`(${e.reating})`}</Text>
                      </View>
                    </View>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        {/* Cards View ends */}
      </View>
    </View>
  );
};

export default ToletCom;
