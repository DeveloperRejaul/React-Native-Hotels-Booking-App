import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constent/colors.js';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {rf, rh, rw} from '../../constent/responsivedimensions.js';
import OctIcon from 'react-native-vector-icons/Octicons.js';
import HeaderCom from '../../components/HeaderCom.jsx';
import InputCom from '../../components/InputCom.js';
import BtnCom from '../../components/BtnCom.js';
import {formValidation} from '../../utilities/formValidationClass.js';
import {useSelector} from 'react-redux';
import useApi from '../../api/useApi.js';

const EditProfile = ({navigation}) => {
  //for  Gender
  const [editGender, setEditGender] = useState(false);
  const [inputColorgender, setInputColorGender] = useState('#f3f3f3a4');

  // For user name
  const [editUserName, setEditUserName] = useState(false);
  const [UserNameColor, setUserNameColor] = useState('#f3f3f3a4');

  // For Email
  const [editEmail, setEditEmail] = useState(false);
  const [emailInputBgColor, setEmailInputBgColor] = useState('#f3f3f3a4');

  // For Phone Number
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);
  const [phoneNumberBgColor, setPhoneNumberBgColor] = useState('#f3f3f3a4');

  // For Birth Date
  const [editBirthDate, setEditBirthDate] = useState(false);
  const [DAYColor, setDAYColor] = useState('#f3f3f3a4');
  const [MMColor, setMMColor] = useState('#f3f3f3a4');
  const [YEARColor, setYEARColor] = useState('#f3f3f3a4');

  //
  const {loading, status, putData, data, error} = useApi();

  // get user data
  const state = useSelector(state => state.login.user);
  const {email, phoneNumber, profileImage, username, id, gender, dateOfBirth} =
    state;

  // For user name
  const handelUserName = value => {
    const {backgroundColor} = formValidation.userName(value);
    setUserNameColor(backgroundColor);
  };

  // For Phone Number
  const handelPhoneNumber = value => {
    const {backgroundColor} = formValidation.phoneNumper(value);
    setPhoneNumberBgColor(backgroundColor);
  };

  // For Email
  const handelEmail = value => {
    const {backgroundColor} = formValidation.email(value);
    setEmailInputBgColor(backgroundColor);
  };
  // For gender
  const handelGender = value => {
    const {backgroundColor} = formValidation.gender(value);
    setInputColorGender(backgroundColor);
  };

  // for Birth Date
  const handelDateDay = value => {
    const {daybgcolor} = formValidation.dateDay(value);
    setDAYColor(daybgcolor);
  };
  const handelDateMM = value => {
    const {monthbgcolor} = formValidation.dateMonth(value);
    setMMColor(monthbgcolor);
  };
  const handelDateYEAR = value => {
    const {yearbgcolor} = formValidation.dateYear(value);
    setYEARColor(yearbgcolor);
  };

  // handel Edit Profile Button
  const handelEditProfilebtn = async () => {
    const {
      dateDay,
      dateMonth,
      dateYears,
      email,
      gender,
      isOK,
      phoneNumber,
      userName,
    } = formValidation.editeProfileBtn();
    await putData(
      `https://hotelbookingappserver-production.up.railway.app/users/${id}`,
      {
        username: userName,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
        dateOfBirth: `${dateDay}/${dateMonth}/${dateYears}`,
      },
    );
  };

  const handelUpdateImage = async () => {
    const result = await launchImageLibrary('mediaType');
    console.log(result);
  };

  // we can do allwas
  useEffect(() => {
    console.log(status);
    console.log(data);
  }, [status, data]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeaderCom text={'Edit Profile'} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.ScrollBody}>
          <View style={styles.header}>
            <View style={styles.imagePrifile}>
              <Image style={styles.image} source={{uri: profileImage}} />
              <View style={styles.iconBody}>
                <Pressable onPress={handelUpdateImage}>
                  <OctIcon color={'#fff'} size={rf(2.5)} name="pencil" />
                </Pressable>
              </View>
            </View>
          </View>

          {/* Body */}
          <View style={styles.body}>
            {/* User Name  */}
            <View style={styles.btnCon}>
              <View style={styles.lableBody}>
                <Text style={styles.lable}>User Name</Text>
                <OctIcon
                  color={!editUserName ? COLORS.grey : '#68a2f5'}
                  size={rf(2.5)}
                  name="pencil"
                  onPress={() => setEditUserName(prv => !prv)}
                />
              </View>
              <InputCom
                onChangeText={handelUserName}
                defaultValue={username}
                editable={editUserName}
                inputBodyStyle={{backgroundColor: UserNameColor}}
              />
            </View>

            {/* Email  */}
            <View style={styles.btnCon}>
              <View style={styles.lableBody}>
                <Text style={styles.lable}>Email </Text>
                <OctIcon
                  color={!editEmail ? COLORS.grey : '#68a2f5'}
                  size={rf(2.5)}
                  name="pencil"
                  onPress={() => setEditEmail(prv => !prv)}
                />
              </View>
              <InputCom
                defaultValue={email}
                onChangeText={handelEmail}
                inputBodyStyle={{backgroundColor: emailInputBgColor}}
                editable={editEmail}
              />
            </View>

            {/* Phone Number */}
            <View style={styles.btnCon}>
              <View style={styles.lableBody}>
                <Text style={styles.lable}>Phone </Text>
                <OctIcon
                  color={!editPhoneNumber ? COLORS.grey : '#68a2f5'}
                  size={rf(2.5)}
                  name="pencil"
                  onPress={() => setEditPhoneNumber(prv => !prv)}
                />
              </View>
              <InputCom
                defaultValue={phoneNumber}
                onChangeText={handelPhoneNumber}
                inputBodyStyle={{backgroundColor: phoneNumberBgColor}}
                keyboardType={'phone-pad'}
                editable={editPhoneNumber}
              />
            </View>

            {/* Gender */}
            <View style={styles.btnCon}>
              <View style={styles.lableBody}>
                <Text style={styles.lable}>Gender</Text>
                <OctIcon
                  color={!editGender ? COLORS.grey : '#68a2f5'}
                  size={rf(2.5)}
                  name="pencil"
                  onPress={() => setEditGender(prv => !prv)}
                />
              </View>
              <InputCom
                onChangeText={handelGender}
                defaultValue={''}
                inputBodyStyle={{backgroundColor: inputColorgender}}
                editable={editGender}
                placeholder={'Gender'}
              />
            </View>

            {/* Birth Date */}
            <View style={styles.btnCon}>
              <View style={styles.lableBody}>
                <Text style={styles.lable}>Date of birth</Text>
                <OctIcon
                  color={!editBirthDate ? COLORS.grey : '#68a2f5'}
                  size={rf(2.5)}
                  name="pencil"
                  onPress={() => setEditBirthDate(prv => !prv)}
                />
              </View>
              <View style={styles.birthDateInputBody}>
                <InputCom
                  inputTextStyle={styles.input}
                  defaultValue={''}
                  keyboardType="numeric"
                  editable={editBirthDate}
                  onChangeText={handelDateDay}
                  placeholder={'DAY'}
                  inputBodyStyle={{backgroundColor: DAYColor}}
                  maxLength={2}
                />
                <InputCom
                  inputTextStyle={styles.input}
                  defaultValue={''}
                  keyboardType="numeric"
                  editable={editBirthDate}
                  onChangeText={handelDateMM}
                  placeholder={'MM'}
                  inputBodyStyle={{backgroundColor: MMColor}}
                />
                <InputCom
                  inputTextStyle={styles.input}
                  defaultValue={''}
                  keyboardType="numeric"
                  editable={editBirthDate}
                  onChangeText={handelDateYEAR}
                  placeholder={'YEAR'}
                  inputBodyStyle={{backgroundColor: YEARColor}}
                  maxLength={4}
                />
              </View>
            </View>

            {/* Data  submit Button */}
            <BtnCom
              loading={loading}
              text={'Proceed'}
              onPress={handelEditProfilebtn}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imagePrifile: {
    height: rh(15),
    width: rh(15),
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rh(2),
    position: 'relative',
  },
  title: {
    fontSize: rf(3),
    fontWeight: '700',
    paddingBottom: rh(2),
    color: '#405582',
  },

  body: {
    paddingHorizontal: rw(6),
  },
  iconBody: {
    position: 'absolute',
    backgroundColor: '#68a2f5',
    padding: rf(0.5),
    borderRadius: 100,
    width: rw(8),
    height: rw(8),
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: '68%',
  },
  lableBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rw(2),
  },
  lable: {
    fontSize: rf(2),
    fontWeight: '600',
    color: COLORS.grey,
    marginBottom: rh(1),
  },
  btnCon: {
    paddingBottom: rh(3),
  },
  birthDateInputBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  input: {
    width: rw(15),
    textAlign: 'center',
  },
  ScrollBody: {
    paddingBottom: rh(10),
  },
});
