import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, memo} from 'react';
import styles from './styles.js';
import {COLORS} from '../../constent/colors.js';

const TimeDuration = ({getValue}) => {
  const [value, setvalue] = useState('#0080ffbe');

  useEffect(() => {
    getValue(value, 'time');
  }, [value]);

  return (
    <View style={[styles.TDContainer, {backgroundColor: '#f7f7f7'}]}>
      <Text style={styles.Timetitle}>TimeDuration</Text>
      <View style={styles.timeItem}>
        <Text
          style={[
            styles.time,
            {
              backgroundColor:
                value === '10:00 AM' ? COLORS.green : '#0080ffbe',
            },
          ]}
          onPress={() => setvalue('10:00 AM')}>
          10:00 AM
        </Text>
        <TouchableOpacity onPress={() => setvalue('12:00 PM')}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor:
                  value === '12:00 PM' ? COLORS.green : '#0080ffbe',
              },
            ]}>
            12:00 PM
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setvalue('3:00 PM')}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor:
                  value === '3:00 PM' ? COLORS.green : '#0080ffbe',
              },
            ]}>
            3:00 PM
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setvalue('6:00 PM')}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor:
                  value === '6:00 PM' ? COLORS.green : '#0080ffbe',
              },
            ]}>
            6:00 PM
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(TimeDuration);
