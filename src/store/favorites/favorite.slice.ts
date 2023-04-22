import { IRecipe } from './../../types/recipe.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IRecipe[] = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleToFavorites: (
            state,
            { payload: recipe }: PayloadAction<IRecipe>
        ) => {
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
