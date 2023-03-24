import { createSlice } from '@reduxjs/toolkit';

export const projectData = createSlice({
    name: 'projectData',
    initialState: {
        photo: null,
        title: null,
        description: null,
        category: 'Web-Dev',
        otherCategory: null,
        webSite: null,
        allTechnology: null,
        _id: null,
        _ownerId: null,
        owner: null,
        pages: null,
        projectOnPage: [],
        currPage: 1,
        similarProjects: [],
        comments: []
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
        },
        setCurrPage: (state, action) => {
            state.currPage = action.payload;
        },
        setSimilarProjects: (state, action) => {
            state.similarProjects = action.payload;
        },
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        clearProjectData: (state) => {
            state._id = null;
            state.photo = null;
            state.title = null;
            state.description = null;
            state.category = null;
            state.otherCategory = null;
            state.webSite = null;
            state._ownerId = null;
            state.owner = null;
            state.comments = [];
            state.similarProjects = [];
        }
    }
})

export const { 
    setProjectData,
    setNumOfPages,
    setProjectsOnPage,
    setCurrPage,
    setSimilarProjects,
    setComments,
    clearProjectData
} = projectData.actions;

export default projectData.reducer;