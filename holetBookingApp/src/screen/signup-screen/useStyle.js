import {StyleSheet} from 'react-native';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';

export default function useStyle() {
  const sigupStyle = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#ffffff'},
    innerContainer: {
      paddingHorizontal: rw(4),
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1,
    },
    singupText: {
      fontSize: rf(4),
      color: '#000',
      fontWeight: 'bold',
      paddingBottom: rh(3),
    },

    forgate: {
      color: COLORS.grey,
      fontSize: rf(2),
      fontWeight: '400',
    },
    OR: {
      paddingVertical: rh(4),
      color: COLORS.grey,
      fontSize: rf(2),
      fontWeight: '400',
    },
    loginBody: {alignItems: 'center', marginTop: rh(2)},
    logoBody: {flexDirection: 'row'},
    loginIcon: {paddingHorizontal: rf(2)},
    signUp: {color: COLORS.green},
    input: {marginTop: rh(1)},
    logoContainer: {
      paddingVertical: 0,
      paddingBottom: rh(1),
    },
    footerText: {color: COLORS.grey},
    footer: {
      paddingVertical: rh(5),
    },
    inputCom: {marginBottom: rh(1.5)},
    googleLogo: {
      height: rh(4),
      width: rh(4),
      resizeMode: 'cover',
    },
  });

  return sigupStyle;
}
