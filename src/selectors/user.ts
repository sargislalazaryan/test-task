// import types
import {RootState} from '../store';
import {IUser} from '../pages/users';

// get all users with 0 rating and don't touch ever
export const allUsersWithoutRating = (state: RootState) => state.users.list
    .filter((user: IUser) => !user.ratingType);

// get all users with rating or already touched
export const allUsersWithRating = (state: RootState) => state.users.list
    .filter((user: IUser) => user.ratingType)
