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
        webSite: null
    },
    reducers: {
        setProjectData: (state, action) => {
            state.photo = action.payload.photo;
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.category = action.payload.category;
            if (action.payload.otherCategory) {
                state.otherCategory = action.payload.otherCategory;
            }
            state.technology = action.payload.technology;
            state.webSite = action.payload.webSite;
        },
    }
})

export const { setProjectData } = projectData.actions;

export default projectData.reducer;