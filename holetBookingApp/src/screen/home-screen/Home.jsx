import {
  ScrollView,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import {rf, rw} from '../../constent/responsivedimensions.js';
import {imagePhat} from '../../constent/imagePhat.js';
import useHomeStyle from './useHomeStyle.js';
import InputCom from '../../components/InputCom.js';
import BtnCom from '../../components/BtnCom.js';
import HotelsCom from './HotelsCom.js';

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');
  const styles = useHomeStyle();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled={false}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
            {/* Search Section */}
            <InputCom
              placeholder={'Seach..'}
              leftIconName="search-outline"
              rightIconName={'mic-outline'}
              onChangeText={setSearch}
              value={search}
              style={{paddingHorizontal: rw(4)}}
            />

            {/* Banner Part */}
            <View style={{paddingHorizontal: rw(4)}}>
              <View style={[styles.banner]}>
                <Image
                  source={imagePhat.homeBanner}
                  style={styles.bannerImage}
                />
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerTitle}>Come, Stay and Enjoy</Text>
                  <Text style={styles.bannerTitle}>Your day</Text>
                  <Text style={styles.discount}>
                    30% Discount Sossion Special
                  </Text>
                  <View style={[styles.row, styles.contact]}>
                    <View style={[styles.row, styles.addressBody]}>
                      <Ionicon
                        style={styles.addressIcon}
                        name="ios-globe-outline"
                        size={rf(3)}
                      />
                      <Text style={styles.address}>www.hotel.com</Text>
                    </View>
                    <View style={[styles.row, styles.addressBody]}>
                      <Ionicon
                        style={styles.addressIcon}
                        name="call-outline"
                        size={rf(3)}
                      />
                      <Text style={styles.address}>01857-735471</Text>
                    </View>
                  </View>
                  <BtnCom
                    text={'Book Now'}
                    containerStyle={styles.bannerBtn}
                    textStyle={styles.btnText}
                  />
                </View>
              </View>
            </View>

            <HotelsCom />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Home;
