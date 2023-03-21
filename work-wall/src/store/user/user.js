import { createSlice } from '@reduxjs/toolkit';

export const userData = createSlice({
    name: 'userData',
    initialState: {
      username: null, // da naprawq po registraciq i login da se postwa i username i da se poluchava
      email: null,
      _id: null,
      accessToken: null
    },
    reducers: {
      setBasedata: (state, data) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.username = data.username;
        state.email = data.email;
        state._id = data._id;
        state.accessToken = data.accessToken;
      },
      // decrement: (state) => {
      //   state.value -= 1
      // },
      // incrementByAmount: (state, action) => {
      //   state.value += action.payload
      // },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setBasedata } = userData.actions;
  
  export default userData.reducer;