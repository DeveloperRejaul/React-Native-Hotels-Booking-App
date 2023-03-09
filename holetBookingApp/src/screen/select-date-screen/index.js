import {ScrollView, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {COLORS} from '../../constent/colors.js';
import CalendarCom from './CalendarCom.js';
import {getDate} from '../../constent/helperFunction.js';
import styles from './styles.js';
import HeaderCom from '../../components/HeaderCom.jsx';
import HeaderPart from './HeaderPart.js';
import TimeDuration from './TimeDuration.js';
import StayDurstion from './StayDurstion.js';
import Items from './Items.js';
import BtnCom from '../../components/BtnCom.js';
import {comName} from '../../constent/componentName.js';

const SelectData = ({navigation}) => {
  const [slecetDate, setSlecetDate] = useState({
    startDay: '',
    endDay: '',
    dateSnepShot: '',
  });
  const [startDate, setStartDate] = useState({
    DAY: 'xxxxxx',
    MONTH: 'xxx',
    DATE: 'xx',
  });
  const [endDate, setEndDate] = useState({
    DAY: 'xxxxxx',
    MONTH: 'xxx',
    DATE: 'xx',
  });
  const [room, setRoom] = useState('');
  const [adult, setAdult] = useState('');
  const [child, setChild] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [stayDuration, setStayDuration] = useState('');

  const onDayPress = day => {
    const newDateString = day.dateString;
    const newDay = newDateString.slice(8, newDateString.length);

    if (slecetDate.dateSnepShot == '' || slecetDate.startDay > newDay) {
      setSlecetDate(pre => ({
        ...pre,
        startDay: newDay,
        dateSnepShot: newDateString,
      }));

      // set in date
      const {DATE, DAY, MONTH} = getDate(newDateString);
      setStartDate(pre => ({...pre, DATE, DAY, MONTH}));
    } else if (slecetDate.startDay < newDay) {
      setSlecetDate(pre => ({...pre, endDay: newDay}));
      const {DATE, DAY, MONTH} = getDate(newDateString);
      setEndDate(pre => ({...pre, DATE, DAY, MONTH}));
    }
  };

  const getMarked = () => {
    const newDate = slecetDate.dateSnepShot.split('-');
    let marked = {};
    for (let i = slecetDate.startDay; i <= slecetDate.endDay; i++) {
      let day = i.toString().padStart(2, '0');
      const startDay = i == slecetDate.startDay;
      const endDay = i == slecetDate.endDay;

      marked[`${newDate[0]}-${newDate[1]}-${day}`] = {
        startingDay: startDay,
        endingDay: endDay,
        textColor: '#fff',
        color: startDay ? COLORS.green : endDay ? COLORS.green : '#0080ff9d',
      };
    }
    return marked;
  };

  const getValue = useCallback((value, type) => {
    type === 'time' ? setTimeDuration(value) : setStayDuration(value);
  });

  return (
    <View style={styles.container}>
      <HeaderCom text={'Select Date'} onPress={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <HeaderPart startDate={startDate} endDate={endDate} />
        <CalendarCom
          getMarked={getMarked()}
          onDayPress={day => onDayPress(day)}
        />
        <TimeDuration getValue={getValue} />
        <StayDurstion getValue={getValue} />
        <Items
          room={room}
          setRoom={setRoom}
          adult={adult}
          setAdult={setAdult}
          child={child}
          setChild={setChild}
        />

        <BtnCom
          text={'Continue'}
          onPress={() => navigation.navigate(comName.Payment)}
        />
      </ScrollView>
    </View>
  );
};
export default SelectData;
