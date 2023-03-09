import {Text, View} from 'react-native';
import React from 'react';
import Ionican from 'react-native-vector-icons/Ionicons.js';
import styles from './styles.js';
import {rf} from '../../constent/responsivedimensions.js';
import {COLORS} from '../../constent/colors.js';

export default function HeaderPart({startDate, endDate}) {
  return (
    <>
      <View style={styles.infobody}>
        <View>
          <Text style={styles.checkTitle}>Check in date</Text>
          <Text style={styles.date}>
            {startDate.MONTH} {startDate.DATE}
          </Text>
          <Text style={styles.date}>{startDate.DAY}</Text>
        </View>
        <Ionican name="ios-arrow-forward" size={rf(3)} color={COLORS.green} />
        <View style={styles.checkOut}>
          <Text style={styles.checkTitle}>Check out date</Text>
          <Text style={styles.date}>
            {endDate.MONTH} {endDate.DATE}
          </Text>
          <Text style={styles.date}>{endDate.DAY}</Text>
        </View>
      </View>
    </>
  );
}
