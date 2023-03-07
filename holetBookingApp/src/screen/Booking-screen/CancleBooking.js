import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderCom from '../../components/HeaderCom.jsx';
import {COLORS} from '../../constent/colors.js';
import BookingHotelsCard from '../../components/BookingHotelsCard.js';
import {rw} from '../../constent/responsivedimensions.js';

const CancleBooking = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderCom text={'Cancle Booking'} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(ele => (
          <BookingHotelsCard key={ele} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CancleBooking;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white, paddingHorizontal: rw(4)},
});
