import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  onbordingUI: true,
};

export const onboardingUISlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    handelOnbordingUI: state => {
      state.onbordingUI = false;
    },
  },
});

export const {handelOnbordingUI} = onboardingUISlice.actions;

export default onboardingUISlice.reducer;
