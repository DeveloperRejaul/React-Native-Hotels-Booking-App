import {StyleSheet} from 'react-native';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rw(4),
  },
  infobody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rh(4),
  },
  checkOut: {
    alignItems: 'flex-end',
  },
  checkTitle: {color: '#5f7094', fontSize: rf(2.2), fontWeight: '600'},
  date: {color: COLORS.grey, fontSize: rf(2), fontWeight: '400'},
  // Time Duration
  TDContainer: {
    marginBottom: rh(3),
    paddingVertical: rh(2),
    paddingHorizontal: rw(2),
    borderRadius: 5,
  },
  Timetitle: {
    fontSize: rf(2),
    fontWeight: '700',
    color: '#5f7094',
    paddingBottom: rh(0.4),
  },
  timeItem: {flexDirection: 'row', justifyContent: 'space-between'},
  time: {
    paddingHorizontal: rw(2),
    paddingVertical: rh(0.4),
    fontSize: rf(1.8),
    color: '#fff',
    fontWeight: '500',
    borderRadius: 5,
  },
  // ScrollView
  scroll: {
    paddingBottom: rh(5),
  },
  // Items
  itemsContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  item: {width: rw(20), backgroundColor: '#f7f7f7', borderRadius: 5},
  lable: {
    fontWeight: '600',
    fontSize: rf(1.8),
    textAlign: 'center',
    paddingLeft: 0,
  },
  inputBody: {justifyContent: 'center'},
  inputText: {textAlign: 'center'},
});
