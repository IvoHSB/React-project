import { createSlice } from '@reduxjs/toolkit';

export const projectData = createSlice({
    name: 'projectData',
    initialState: {
        photo: null,
        title: null,
        description: null,
        category: 'chooseOption',
        otherCategory: null,
        technology: null,
        webSite: null,
        allTechnology: null,
        _id: null,
        _ownerId: null,
        owner: null
    },
    reducers: {
        setProjectData: (state, action) => {
            state.photo = action.payload.photo;
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.category = action.payload.category;
            state.otherCategory = action.payload.otherCategory;
            state.technology = action.payload.technology;
            state.webSite = action.payload.webSite;
            state.allTechnology = action.payload.allTechnology;
            state._id = action.payload._id;
            state._ownerId = action.payload._ownerId;
            state.owner = action.payload.owner;
        },
    }
})

export const { setProjectData } = projectData.actions;

export default projectData.reducer;