import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {comName} from '../constent/componentName.js';
import Moorinfo from '../screen/Moorinfo-screen/Moorinfo.js';
import Search from '../screen/search-screen/Search.js';
import {rf, rh} from '../constent/responsivedimensions.js';
import Home from '../screen/home-screen/Home.jsx';
import {COLORS} from '../constent/colors.js';
import OctIcon from 'react-native-vector-icons/Octicons.js';
import MtcIcon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import HotelDetails from '../screen/hotel-details-screen/HotelDetails.js';
import Booking from '../screen/Booking-screen/Booking.js';
import SeeAllHotels from '../screen/see-all-hotels-screen/SeeAllHotels.js';
import SelectData from '../screen/select-date-screen/index.js';

export default function BottomTabRoute() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: rh(7),
          backgroundColor: '#eeeff5',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingVertical: 5,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={comName.Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <OctIcon
                name="home"
                size={rf(3)}
                color={focused ? '#057dff' : COLORS.grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={comName.booking}
        component={Booking}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <MtcIcon
                name="currency-ils"
                size={rf(3)}
                color={focused ? '#057dff' : COLORS.grey}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={comName.hotelDetails}
        component={HotelDetails}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="ios-business-outline"
                size={rf(3)}
                color={focused ? '#057dff' : COLORS.grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={comName.seeAllHotels}
        component={SeeAllHotels}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <OctIcon
                name="apps"
                color={focused ? '#057dff' : COLORS.grey}
                size={rf(3)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={comName.Moorinfo}
        component={Moorinfo}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="person-outline"
                color={focused ? '#057dff' : COLORS.grey}
                size={rf(3)}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
