import { createSlice } from '@reduxjs/toolkit';

export const projectData = createSlice({
    name: 'projectData',
    initialState: {
        photo: null,
        title: null,
        description: null,
        category: 'chooseOption',
        otherCategory: null,
        webSite: null,
        allTechnology: null,
        _id: null,
        _ownerId: null,
        owner: null,
        pages: null,
        projectOnPage: null
    },
    reducers: {
        setProjectData: (state, action) => {
            state.photo = action.payload.photo;
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.category = action.payload.category;
            state.otherCategory = action.payload.otherCategory;
            state.webSite = action.payload.webSite;
            state.allTechnology = action.payload.allTechnology;
            state._id = action.payload._id;
            state._ownerId = action.payload._ownerId;
            state.owner = action.payload.owner;
        },
        setNumOfPages: (state, action) => {
            state.pages = action.payload;
        },
        setProjectsOnPage: (state, action) => {
            state.projectOnPage = action.payload;
        }
    }
})

export const { setProjectData, setNumOfPages, setProjectsOnPage } = projectData.actions;

export default projectData.reducer;