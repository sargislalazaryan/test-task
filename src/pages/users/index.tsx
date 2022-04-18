import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// import components
import LayoutContainer from '../../components/layoutContainer';
import InReviewList from "./InReviewList";
import ReviewedList from "./ReviewedList";

// import action creators
import {fetchUsers} from '../../store/userSlice';

// import selectors
import {allUsersWithoutRating, allUsersWithRating} from "../../selectors/user";

import {UsersBox} from './users.styled';
import {MAIN_WHITE, ScreenSizes} from '../../constants/styles';


export interface IUser {
    "id": number,
    "uid": string,
    "password": string,
    "first_name": string,
    "last_name": string,
    "username": string,
    "email": string,
    "avatar": string,
    "gender": string,
    "phone_number": string,
    "social_insurance_number": string,
    "date_of_birth": string,
    "employment": {
        "title": string,
        "key_skill": string
    },
    "address": {
        "city": string,
        "street_name": string,
        "street_address": string,
        "zip_code": string,
        "state": string,
        "country": string,
        "coordinates": {
            "lat": number,
            "lng": number
        }
    },
    "credit_card": {
        "cc_number": string
    },
    "subscription": {
        "plan": string,
        "status": string,
        "payment_method": string,
        "term": string
    },
    rating: number,
    ratingType: string,
}

const Users = () => {
    const dispatch = useDispatch();
    const usersInReview: IUser[] = useSelector(allUsersWithoutRating);
    const usersReviewed:IUser[] = useSelector(allUsersWithRating);

    useEffect(() => {
        dispatch(fetchUsers({}));
    }, [])

    return (
        <LayoutContainer mw={ScreenSizes.md} bgColor={MAIN_WHITE}>
            <UsersBox>
                <InReviewList users={usersInReview} />
                <ReviewedList users={usersReviewed} />
            </UsersBox>
        </LayoutContainer>
    )
}

export default Users;

