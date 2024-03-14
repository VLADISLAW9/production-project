import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const ScrollSaveFormSlice = createSlice({
    name: 'ScrollSaveForm',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: ScrollSaveFormActions } = ScrollSaveFormSlice;
export const { reducer: ScrollSaveFormReducer } = ScrollSaveFormSlice;
