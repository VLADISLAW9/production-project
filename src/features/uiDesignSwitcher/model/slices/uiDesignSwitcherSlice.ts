import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiDesignSwitcherSchema } from '../types/uiDesignSwitcherSchema';

const initialState: UiDesignSwitcherSchema = {
    
};

export const uiDesignSwitcherSlice = createSlice({
    name: 'uiDesignSwitcher',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: uiDesignSwitcherActions } = uiDesignSwitcherSlice;
export const { reducer: uiDesignSwitcherReducer } = uiDesignSwitcherSlice;