import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderCom from '../../components/HeaderCom.jsx';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import {COLORS} from '../../constent/colors.js';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import BtnCom from '../../components/BtnCom.js';
import MrtIcon from 'react-native-vector-icons/MaterialIcons.js';
import {comName} from '../../constent/componentName.js';
import {useDispatch, useSelector} from 'react-redux';
import {handelFavorite} from '../../redux/features/hotelsData/hotelsDataSlice.js';

const Favorit = ({navigation}) => {
  const state = useSelector(state => state);
  const {hotelsData} = state.hotelsData;

  const dispatch = useDispatch();

  return (
    <View style={styles.contaioner}>
      <HeaderCom
        text={'Favorite'}
        textRight="See All"
        textRightStyle={styles.headerRigthBtn}
        onPress={() => navigation.goBack()}
        style={styles.header}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ScrollView}>
          {hotelsData
            .filter(data => data.favorit === true)
            .map((e, i) => (
              <View style={styles.card} key={i}>
                {/*  */}
                <View style={styles.imageBody}>
                  <Image style={styles.image} source={e.image} />
                  <Pressable
                    style={styles.bookMarkBTN}
                    onPress={() =>
                      dispatch(handelFavorite({id: e.id, type: !e.favorit}))
                    }>
                    <MrtIcon
                      name="favorite-outline"
                      size={rf(2.5)}
                      color={'#000'}
                    />
                  </Pressable>
                </View>
                {/*  */}
                <Text style={styles.hotelName}>{e.hotelName}</Text>
                <Text style={styles.location}>{e.location.name}</Text>
                <Text style={styles.price}>{'$' + e.price + ' Per Night'}</Text>
                <Text
                  style={styles.reviews}
                  onPress={() =>
                    navigation.navigate(comName.reviews, {
                      image: e.image,
                      hotelName: e.hotelName,
                      reviews: e.reviews,
                    })
                  }>
                  <Ionicon name="star" color={'#fccd37'} />
                  <Ionicon name="star" color={'#fccd37'} />
                  <Ionicon name="star" color={'#fccd37'} />
                  <Ionicon name="star" color={'#fccd37'} />
                  {`( ${e.reviews.length} Reviews)`}
                </Text>
                <BtnCom
                  containerStyle={styles.btn}
                  text={e.booked ? 'Rebook' : 'Book Now'}
                />
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorit;

const styles = StyleSheet.create({
  contaioner: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rw(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRigthBtn: {
    fontSize: rf(2),
    color: COLORS.green,
    textDecorationLine: 'underline',
  },
  imageBody: {
    height: rh(20),
    width: rh(20),
    overflow: 'hidden',
    borderRadius: rf(1),
    position: 'relative',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  card: {
    width: rh(22),
    paddingBottom: rh(2),
  },
  btn: {
    height: rh(4),
    width: '90%',
  },
  ScrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: rw(96),
    paddingHorizontal: rw(2),
    paddingTop: rh(1),
  },
  bookMarkBTN: {
    backgroundColor: COLORS.green,
    zIndex: 2,
    padding: rf(0.5),
    borderRadius: rf(2),
    height: rh(4),
    width: rh(4),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: rf(1),
    position: 'absolute',
    right: '2%',
    top: '2%',
  },
  hotelName: {
    fontWeight: '600',
    fontSize: rf(2.2),
    color: '#3e557e',
  },
  location: {
    fontSize: rf(2),
    fontWeight: '500',
    color: COLORS.grey,
  },
  price: {
    fontSize: rf(1.9),
    color: COLORS.grey,
    fontWeight: '400',
  },
  reviews: {
    fontSize: rf(1.9),
    color: COLORS.grey,
    fontWeight: '400',
    paddingBottom: rh(1),
  },
  header: {
    marginBottom: rh(1),
  },
});
