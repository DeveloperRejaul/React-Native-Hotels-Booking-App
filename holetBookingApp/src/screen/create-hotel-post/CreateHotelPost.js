import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderCom from '../../components/HeaderCom.jsx';
import {COLORS} from '../../constent/colors.js';
import InputCom from '../../components/InputCom.js';
import {Checkbox, Radio} from 'native-base';
import {rh, rw} from '../../constent/responsivedimensions.js';
import {imagePhat} from '../../constent/imagePhat.js';
import BtnCom from '../../components/BtnCom.js';
import useLocation from './GPS-LOCATION/useLocation.js';

const CreateHotelPost = ({navigation}) => {
  const {getLocation, posion} = useLocation();
  const [amenities, setAmenities] = React.useState({
    TV: false,
    WIFI: false,
    AC: false,
    FREE_PERKING: false,
  });
  const [romes, setRomes] = useState([]);

  const handelamenities = (value, items) => {
    if (items === 'TV') {
      setAmenities({TV: value});
    }
    if (items === 'WIFI') {
      setAmenities({WIFI: value});
    }
    if (items === 'AC') {
      setAmenities({AC: value});
    }
    if (items === 'Parking') {
      setAmenities({FREE_PERKING: value});
    }
  };

  const handelCreateRoooms = () => {
    setRomes(pre => [...pre, {romeType: ''}]);
  };
  return (
    <View style={styles.container}>
      <HeaderCom
        text={'Publish Your Hotel'}
        onPress={() => navigation.goBack()}
      />

      <ScrollView>
        <View>
          {/* Hotel Name */}
          <InputCom lable={'Name'} placeholder={'Type hotel name '} />

          {/* Loation part */}
          <Text>Hotel Location</Text>
          <View style={[styles.row]}>
            <Text>Name:</Text>
            <TextInput style={[styles.inputComen]} />
          </View>

          <Text onPress={getLocation}>Get your Gps</Text>
          <Text>Latitude:{posion.lat} </Text>
          <Text>Longitude: {posion.log}</Text>

          {/* Price Range */}
          <Text> Price Range</Text>
          <View style={[styles.row]}>
            <TextInput style={[styles.inputComen]} />
            <Text>To</Text>
            <TextInput style={[styles.inputComen]} />
          </View>

          {/* amenities part */}
          <Text>Amenities</Text>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Checkbox
              value="TV"
              my="1"
              onChange={value => handelamenities(value, 'TV')}>
              TV
            </Checkbox>
            <Checkbox
              value="AC"
              my="1"
              onChange={value => handelamenities(value, 'AC')}>
              Ac
            </Checkbox>
            <Checkbox
              value="Wi-Fi"
              my="1"
              onChange={value => handelamenities(value, 'WIFI')}>
              Wi-Fi
            </Checkbox>
            <Checkbox
              value="Free Parking"
              my="1"
              onChange={value => handelamenities(value, 'Parking')}>
              Free Parking
            </Checkbox>
          </View>
          {/* Discription part */}
          <Text>Discription</Text>
          <TextInput style={[styles.inputComen]} />
          {/* Create Rome */}
          <Text>Rooms Impormation</Text>

          {romes.map((ele, i) => (
            <View key={Math.random()}>
              <Text>Room No {i + 1}</Text>
              <Image
                source={imagePhat.cardImage_01}
                style={[styles.roomsimage]}
              />
              <View style={[styles.row]}>
                <Text>Room Type: </Text>
                <Radio.Group
                  value={romes[i].romeType}
                  onChange={nextValue => setRomes([{romeType: nextValue}])}
                  name="MyRadioGroup"
                  flexDirection="row">
                  <Radio value="single">Single bed</Radio>
                  <Radio value="Double">Double bed</Radio>
                </Radio.Group>
              </View>
              <View style={[styles.row]}>
                <Text>Price:</Text>
                <TextInput style={styles.inputComen} />
              </View>
              <Text>Room Discription:</Text>
              <TextInput style={styles.inputComen} />
            </View>
          ))}
          <TouchableOpacity onPress={handelCreateRoooms}>
            <Text>Create Room</Text>
          </TouchableOpacity>

          <BtnCom text="Save" />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateHotelPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: rw(2),
  },
  row: {
    flexDirection: 'row',
  },
  inputComen: {borderWidth: 1},
  roomsimage: {height: rh(10), width: '100%', resizeMode: 'cover'},
});
