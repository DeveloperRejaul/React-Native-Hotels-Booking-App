import React from 'react';
import {CalendarList} from 'react-native-calendars';
import {COLORS} from '../../constent/colors.js';
import {getCurentDate} from '../../constent/helperFunction.js';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';

export default function CalendarCom({getMarked, onDayPress}) {
  return (
    <>
      <CalendarList
        horizontal={true}
        style={{
          height: rh(40),
          marginBottom: rh(3),
        }}
        hideArrows={false}
        minDate={getCurentDate()}
        maxDate={'2025-06-06'}
        markingType="period"
        markedDates={getMarked}
        onDayPress={onDayPress}
        theme={{
          dayTextColor: '#000',
          textDayFontWeight: '600',
          textDayFontSize: rf(1.8),
          monthTextColor: '#000',
          arrowColor: COLORS.green,
          calendarBackground: '#f7f7f7',
          textDayStyle: {
            marginVertical: 0,
            paddingVertical: 0,
          },
        }}
      />
    </>
  );
}
