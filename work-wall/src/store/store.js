import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user';
import profileReducer from './profile/profile';
import projectReducer from './project/project'


export default configureStore({
    reducer: {
      user: userReducer,
      profile: profileReducer,
      project: projectReducer
    },
  })