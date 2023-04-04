import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleToFavites: (state, action) => {
            const recipe = action.payload;
            const isExist = state.some((r) => r.id === recipe.id);
            if (isExist) {
                const index = state.findIndex((item) => item.id === recipe.id);
                if (index !== -1) {
                    state.splice(index, 1);
                }
            } else {
                state.push(recipe);
            }
        },
    },
});

export const { actions, reducer } = favoritesSlice;
