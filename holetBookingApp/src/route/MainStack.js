import * as React from 'react';
import {comName} from '../constent/componentName.js';
import EditProfile from '../screen/edit-profile-screen/EditProfile.jsx';
import Notification from '../screen/notification-screen/Notification.js';
import Favorit from '../screen/favorit-list-screen/Favorit.js';
import Reviews from '../screen/reviews-screen/Reviews.js';
import HotelDetails from '../screen/hotel-details-screen/HotelDetails.js';
import RoomDetails from '../screen/room-details-screen/RoomDetails.js';
import Location from '../screen/location-screen/Location.js';
import SelectData from '../screen/select-date-screen/index.js';
import SeeAllHotels from '../screen/see-all-hotels-screen/SeeAllHotels.js';
import BottomTabRoute from './BottomTabRoute.js';
import ChatUI from '../screen/message-screen/component/ChatUI.js';
import YourProfile from '../screen/your-profile/YourProfile.js';
import CreateHotelPost from '../screen/create-hotel-post/CreateHotelPost.js';
import Booking from '../screen/Booking-screen/Booking.js';
import NewBooking from '../screen/Booking-screen/NewBooking.js';
import CancleBooking from '../screen/Booking-screen/CancleBooking.js';
import Payment from '../screen/payment-screen.js/index.js';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={comName.BottomTabRoute} component={BottomTabRoute} />
      <Stack.Screen name={comName.editProfile} component={EditProfile} />
      <Stack.Screen name={comName.notification} component={Notification} />
      <Stack.Screen name={comName.favorit} component={Favorit} />
      <Stack.Screen name={comName.reviews} component={Reviews} />
      <Stack.Screen name={comName.hotelDetails} component={HotelDetails} />
      <Stack.Screen name={comName.roomDetails} component={RoomDetails} />
      <Stack.Screen name={comName.location} component={Location} />
      <Stack.Screen name={comName.selectDate} component={SelectData} />
      <Stack.Screen name={comName.seeAllHotels} component={SeeAllHotels} />
      <Stack.Screen name={comName.chatUI} component={ChatUI} />
      <Stack.Screen name={comName.YourProfile} component={YourProfile} />
      <Stack.Screen name={comName.booking} component={Booking} />
      <Stack.Screen name={comName.newBooking} component={NewBooking} />
      <Stack.Screen name={comName.cancleBooking} component={CancleBooking} />
      <Stack.Screen name={comName.Payment} component={Payment} />
      <Stack.Screen
        name={comName.createHotelPost}
        component={CreateHotelPost}
      />
    </>
  );
}
