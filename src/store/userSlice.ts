import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {requestURI} from "../configs";
import {
    DECREMENT,
    INCREMENT,
    NEGATIVE,
    PENDING,
    POSITIVE,
    REJECTED,
    RESOLVED,
} from '../constants/app';

// import types
import {IUser} from "../pages/users";

interface IFetchUsersProps {
    page?: number,
    loadMore?: boolean
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async ({page = 1, loadMore = false}: IFetchUsersProps, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${requestURI}/users/random_user?size=5&page=${page}`);
            return await response.data
        } catch ({message}) {
            return rejectWithValue(message);
        }
    }
);

interface IInitialState {
    list: IUser[];
    status: string,
    error: string,
}

const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: '',
        error: '',
    },
    reducers: {
        changeRating(state: IInitialState, {payload: {id, direction}}) {
            const currentUser = state.list.find((user: IUser) => user.id === id);

            if (currentUser) {
                if (direction === INCREMENT && currentUser.rating < 5) {
                    currentUser.rating++;
                    currentUser.ratingType = currentUser.rating > 0 ? POSITIVE : NEGATIVE;
                } else {
                    if (direction === DECREMENT && currentUser.rating > -5) {
                        currentUser.rating--;
                        currentUser.ratingType = currentUser.rating < 0 ? NEGATIVE : POSITIVE;
                    }
                }
            }
        },

        returnUserToReview(state: IInitialState, {payload: {id}}) {
            const currentUser = state.list.find((user: IUser) => user.id === id);
            if (currentUser) {
                currentUser.rating = 0;
                currentUser.ratingType = '';
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state: IInitialState) => {
                state.status = PENDING;
                state.error = '';
            })
            .addCase(fetchUsers.fulfilled, (state: IInitialState, action: any) => {
                const isLoadMore = action.meta.arg.loadMore;
                const users = action.payload.map((user: IUser) => {
                    return {
                        ...user,
                        rating: 0,
                        ratingType: ''
                    }
                })
                state.status = RESOLVED;
                state.list = isLoadMore ? [...state.list, ...users] : users;

            })
            .addCase(fetchUsers.rejected, (state: IInitialState, {payload}: any) => {
                state.status = REJECTED;
                state.error = payload;
            })
    }
});

export const {changeRating, returnUserToReview} = userSlice.actions;

export default userSlice.reducer;