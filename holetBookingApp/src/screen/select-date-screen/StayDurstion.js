import {Text, View, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import styles from './styles.js';
import {COLORS} from '../../constent/colors.js';

const StayDurstion = ({getValue}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    getValue(value, 'stay');
  }, [value]);

  return (
    <View style={[styles.TDContainer, {backgroundColor: '#f7f7f7'}]}>
      <Text style={styles.Timetitle}>How long you want to stay</Text>
      <View style={styles.timeItem}>
        <TouchableOpacity onPress={() => setValue('24 hours')}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor:
                  value === ' 24 hours' ? COLORS.green : '#0080ffbe',
              },
            ]}>
            24 hours
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue('1 week')}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor:
                  value === '1 week' ? COLORS.green : '#0080ffbe',
              },
            ]}>
            1 week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue('1 month')}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor:
                  value === ' 1 month' ? COLORS.green : '#0080ffbe',
              },
            ]}>
            1 month
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue('1 year')}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor:
                  value === '1 year' ? COLORS.green : '#0080ffbe',
              },
            ]}>
            1 year
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(StayDurstion);
