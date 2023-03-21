import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user';
import profileReducer from './profilePage/profile';


export default configureStore({
    reducer: {
      user: userReducer,
      profile: profileReducer
    },
  })