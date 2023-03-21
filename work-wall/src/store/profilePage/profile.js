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
        ownerId: null
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
    }
})

export const { setProfileData } = profileData.actions;
  
export default profileData.reducer;