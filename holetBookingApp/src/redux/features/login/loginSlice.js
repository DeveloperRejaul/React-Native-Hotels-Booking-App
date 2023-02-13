import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  user: {},
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    handelLogin: (state, {payload}) => {
      state.isLogin = true;
      state.user = payload;
    },
    handelLogout: state => {
      state.isLogin = false;
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {handelLogin, handelLogout} = loginSlice.actions;

export default loginSlice.reducer;
