const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  splass: true,
};

const splassSlice = createSlice({
  name: 'splassSlice',
  initialState,
  reducers: {
    handelSplass: state => {
      state.splass = false;
    },
  },
});

export const {handelSplass} = splassSlice.actions;
export default splassSlice.reducer;
