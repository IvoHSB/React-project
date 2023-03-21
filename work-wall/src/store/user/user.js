import { createSlice } from '@reduxjs/toolkit';

export const userData = createSlice({
    name: 'userData',
    initialState: {
      username: null,
      email: null,
      _id: null,
      accessToken: null,
      phoneNumber: null,
      webSite: null,
      aboutYou: null,
      skills: null,
      photo: null
    },
    reducers: {
      setBasedata: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.username = action.payload.username;
        state.email = action.payload.email;
        state._id = action.payload._id;
        state.accessToken = action.payload.accessToken
      },
      setDetailedData: (state, action) => {
        if (action.payload.phoneNumber) {
          state.phoneNumber = action.payload.phoneNumber;
        }
        if (action.payload.webSite) {
          state.webSite = action.payload.webSite;
        }
        if (action.payload.aboutYou) {
          state.aboutYou = action.payload.aboutYou;
        }
        if (action.payload.allSkill.length !== 0) {
          state.skills = action.payload.allSkill;
        }
        if (action.payload.photo) {
          state.photo = action.payload.photo;
        }
      }
      // decrement: (state) => {
      //   state.value -= 1
      // },
      // incrementByAmount: (state, action) => {
      //   state.value += action.payload
      // },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setBasedata, setDetailedData } = userData.actions;
  
  export default userData.reducer;