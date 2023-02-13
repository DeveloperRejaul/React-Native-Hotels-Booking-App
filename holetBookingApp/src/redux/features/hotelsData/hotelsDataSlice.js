import {createSlice} from '@reduxjs/toolkit';
import {hotelsData} from '../../../constent/AllHotelInformationData.js';
import hotelDataValidator from '../../../utilities/hotelsValidation.js';

const initialState = {
  hotelsData: hotelsData,
};

export const HotelsDataSlice = createSlice({
  name: 'HotelsData',
  initialState,
  reducers: {
    handelFavorite: (state, payload) => {
      const {id, type} = payload.payload;
      const newData = state.hotelsData.map(ele => {
        if (ele.id === id) {
          return {...ele, favorit: type};
        } else {
          return {...ele};
        }
      });
      state.hotelsData = newData;
    },
  },
});

// Action creators are generated for each case reducer function
export const {handelCatagory, handelFavorite} = HotelsDataSlice.actions;
export default HotelsDataSlice.reducer;

// // Handel Catagory
// const handelCatagory = catagoryName => {
//   setCelectCatagory(catagoryName);
//   const newHotel = hotelDataValidator.hotelData(catagoryName, hotelsData);
//   sethotels(newHotel);
// };
