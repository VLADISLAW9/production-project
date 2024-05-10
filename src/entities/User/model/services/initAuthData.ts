import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, getState, dispatch } = thunkApi;
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('no user id');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('no response data');
            }

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
