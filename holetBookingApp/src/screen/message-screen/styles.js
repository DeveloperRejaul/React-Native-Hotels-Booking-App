import {StyleSheet} from 'react-native';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: rh(0.3),
  },
  image: {
    height: rw(10),
    width: rw(10),
    borderRadius: 100,
    marginLeft: rw(4),
  },
  fdr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rh(6),
    paddingTop: rh(1),
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.062)',
    paddingBottom: rh(0.5),
    backgroundColor: '#fff',
  },
  name: {
    fontSize: rf(1.9),
    color: '#000',
    fontWeight: '600',
  },
  activeStatus: {
    fontSize: rf(1.4),
  },
  nameBody: {
    marginLeft: rw(3),
  },
  callBody: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '40%',
  },
  acountBody: {
    width: '50%',
  },
  typeingContainer: {
    height: rh(6),
    justifyContent: 'space-around',
  },
  textInput: {
    padding: 0,
    width: '70%',
  },
  textInputfocus: {
    padding: 0,
    width: '90%',
  },
  textInputBodyfocus: {
    width: rw(75),
    backgroundColor: '#f2f3f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rf(1),
    height: rh(4),
  },
  textInputBody: {
    width: rw(40),
    backgroundColor: '#f2f3f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rf(1),
    height: rh(4),
  },
  sendSMS: {
    textAlignVertical: 'center',
    backgroundColor: COLORS.green,
    fontSize: rf(2),
    color: '#fff',
    alignSelf: 'flex-end',
    paddingHorizontal: rw(3),
    borderRadius: 14,
    borderBottomRightRadius: 2,
    fontWeight: '600',
    marginVertical: rh(0.3),
    paddingVertical: rh(0.5),
  },
  listStyle: {
    paddingHorizontal: rw(2),
  },
  reciveSMS: {
    textAlignVertical: 'center',
    backgroundColor: COLORS.green,
    fontSize: rf(2),
    color: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: rw(3),
    borderRadius: 14,
    borderBottomRightRadius: 2,
    fontWeight: '600',
    marginVertical: rh(0.3),
    paddingVertical: rh(0.5),
  },
  chatImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
    borderRadius: 10,
  },
  chatImageBody: {
    height: rw(40),
    width: rw(50),
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: rh(1),
  },
});
