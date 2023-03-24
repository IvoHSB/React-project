import { createSlice } from '@reduxjs/toolkit';

export const profileData = createSlice({
    name: 'profileData',
    initialState: {
        username: null,
        email: null,
        phoneNumber: null,
        webSite: null,
        aboutYou: null,
        skills: null,
        photo: null,
        otherSkill: null,
        ownerId: null,
        ownProjects: null
    },
    reducers: {
        setProfileData: (state, action) => {
            if (action.payload.username) {
                state.username = action.payload.username;
            }
            if (action.payload.email) {
                state.email = action.payload.email;
            }
            if (action.payload.phoneNumber) {
              state.phoneNumber = action.payload.phoneNumber;
            }
            if (action.payload.webSite) {
              state.webSite = action.payload.webSite;
            }
            if (action.payload.aboutYou) {
              state.aboutYou = action.payload.aboutYou;
            }
            if (action.payload.allSkill) {
              state.skills = action.payload.allSkill;
            }
            if (action.payload.photo) {
              state.photo = action.payload.photo;
            }
            if (action.payload.otherSkill) {
              state.otherSkill = action.payload.otherSkill;
            }
            state.ownerId = action.payload._ownerId;
        },
        setOwnProjects(state, action) {
          state.ownProjects = action.payload;
        },
        clearProfileDetails (state) {
          state.username = null;
          state.email = null;
          state.phoneNumber = null;
          state.webSite = null;
          state.aboutYou = null;
          state.skills = null;
          state.photo = null;
          state.otherSkill = null;
          state.ownerId = null;
          state.ownProjects = null;
        },
    }
})

export const { setProfileData, clearProfileDetails, setOwnProjects } = profileData.actions;
  
export default profileData.reducer;