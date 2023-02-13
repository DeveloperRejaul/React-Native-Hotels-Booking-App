import {StyleSheet} from 'react-native';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';

export default function useHomeStyle() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      flex: 1,
    },
    body: {
      paddingHorizontal: rw(4),
      paddingTop: rh(1),
    },
    catagorySeeAll: {
      fontSize: rf(2),
      color: '#4fb8fe',
      fontWeight: '400',
      paddingBottom: 5,
      textDecorationLine: 'underline',
    },
    catagory: {
      height: rh(5),
      width: rw(22),
      margin: 2,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollView: {flexDirection: 'row'},
    catagoryText: {
      fontSize: rf(2),
      fontWeight: '600',
      color: '#767c8a',
    },

    cardBody: {
      flexDirection: 'row',
    },

    cardImageBody: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-between',
    },
    cardImage: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
    },
    imageBtn: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      borderRadius: rf(2),
      overflow: 'hidden',
    },
    card: {
      marginRight: rw(5),
      height: rh(45),
      width: rw(70),
      borderRadius: 10,
      position: 'relative',
      padding: rf(0.5),
    },

    searchBody: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      height: rh(6),
      width: rw(92),
      marginVertical: rh(1),
      borderRadius: rf(1),
      padding: rf(1),
      borderColor: '#a3a3a3',
    },

    bookMarkBTN: {
      zIndex: 2,
      padding: rf(0.1),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      margin: rf(1),
    },
    banner: {
      height: rh(20),
      width: '100%',
      position: 'relative',
      paddingVertical: rh(0.5),
      marginVertical: rh(1),
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      borderRadius: rf(1),
      position: 'absolute',
    },
    bannerContent: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: rh(1),
    },
    row: {
      flexDirection: 'row',
    },
    bannerBtn: {
      width: '40%',
      height: '20%',
      borderRadius: 10,
    },
    btnText: {
      fontSize: rf(2),
    },
    bannerTitle: {
      color: COLORS.white,
      fontWeight: '600',
      fontSize: rf(2),
    },
    discount: {
      color: COLORS.white,
      fontSize: rf(1.8),
      fontWeight: '600',
    },
    address: {
      color: COLORS.white,
      fontSize: rf(1.5),
      fontWeight: '400',
    },
    addressBody: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    addressIcon: {
      color: COLORS.white,
    },
    contact: {
      justifyContent: 'space-between',
      width: '80%',
    },
    catagoryHader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: rh(1),
    },
    chooseTitle: {
      fontSize: rf(2.7),
      fontWeight: '700',
      color: '#445682',
    },
    HotelName: {
      color: COLORS.white,
      fontSize: rf(3),
      fontWeight: '700',
    },
    contentBody: {
      padding: rf(2),
    },
    HotelDiscription: {
      color: COLORS.white,
      fontSize: rf(1.6),
      fontWeight: '500',
    },
    itemText: {
      color: COLORS.white,
      fontSize: rf(1.6),
      fontWeight: '800',
    },
    itemsBody: {
      justifyContent: 'space-between',
    },
    imageBackgrount: {
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2))',
      height: '50%',
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      borderBottomEndRadius: rf(2),
      borderBottomStartRadius: rf(2),
    },
    items: {justifyContent: 'center', alignItems: 'center'},
  });
  return styles;
}
