import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import InputCom from '../../components/InputCom.js';
import {COLORS} from '../../constent/colors.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import BookingHotelsCard from '../../components/BookingHotelsCard.js';
import {comName} from '../../constent/componentName.js';
export default function Booking({navigation}) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <InputCom
        placeholder={'Seach..'}
        leftIconName="search-outline"
        rightIconName={'mic-outline'}
        onChangeText={setSearch}
        value={search}
      />

      <>
        <Text style={styles.bookingTitle}>Booking</Text>
        <View style={styles.items}>
          <Text style={[styles.item, styles.active]}>Past</Text>
          <Text
            style={styles.item}
            onPress={() => navigation.navigate(comName.newBooking)}>
            New
          </Text>
          <Text
            style={styles.item}
            onPress={() => navigation.navigate(comName.cancleBooking)}>
            Cancel
          </Text>
          <Text
            style={styles.item}
            onPress={() => navigation.navigate(comName.reviews)}>
            Review
          </Text>
        </View>
        {/* Hotels Items */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(ele => (
            <BookingHotelsCard key={ele} />
          ))}
        </ScrollView>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white, paddingHorizontal: rw(4)},
  bookingTitle: {
    textAlign: 'center',
    fontSize: rf(3),
    color: '#445682',
    fontWeight: '700',
    paddingTop: rh(2),
    paddingBottom: rh(1.5),
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: rh(1),
  },
  item: {color: COLORS.grey, fontWeight: '500', fontSize: rf(2)},
  active: {color: COLORS.active},
});
