import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {comName} from '../constent/componentName.js';
import Moorinfo from '../screen/Moorinfo-screen/Moorinfo.js';
import Search from '../screen/search-screen/Search.js';
import Message from '../screen/message-screen/Message.js';
import {rf, rh} from '../constent/responsivedimensions.js';
import Home from '../screen/home-screen/Home.jsx';
import {COLORS} from '../constent/colors.js';

export default function BottomTabRoute() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: rh(7),
          backgroundColor: '#eeeff5',
        },
        tabBarLabelStyle: {
          marginBottom: rh(1),
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={comName.Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home-outline"
                size={rf(3)}
                color={focused ? '#057dff' : COLORS.grey}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={comName.Message}
        component={Message}
        options={{
          headerShown: false,
          tabBarLabel: 'Message',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="md-chatbubble-ellipses-outline"
                size={rf(3)}
                color={focused ? '#057dff' : COLORS.grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={comName.Search}
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="search"
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
          tabBarLabel: 'Moor',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="ellipsis-vertical"
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
