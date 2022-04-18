import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// import components
import ModalWindow from '../../components/modal';
import UserCard from "./UserCard";

// import action creators
import {returnUserToReview} from '../../store/userSlice';
import {closeModal} from "../../store/modalSlice";

// import selectors
import {modal} from "../../selectors/modal";

import {
    ReviewedListBox,
    ReviewedUsersListBox,
    Title, UserColumnsTitle,
    UsersColumn,
} from './users.styled';

// import types
import {IUser} from './index';

import {TEXT} from '../../constants/texts';
import {NEGATIVE, POSITIVE} from "../../constants/app";
import {USER_MOVING_CONFIRMATION} from "../../constants/modal";

interface IReviewedListProps {
    users: IUser[]
}

const ReviewedList = ({users}: IReviewedListProps) => {
    const dispatch = useDispatch();
    const modalData = useSelector(modal);

    const negativeUsers = users
        .filter((user: IUser) => user.ratingType === NEGATIVE)
        .map((user: IUser) => <UserCard key={user.id} user={user}/>);

    const positiveUsers = users
        .filter((user: IUser) => user.ratingType === POSITIVE)
        .map((user: IUser) => <UserCard key={user.id} user={user}/>);

    const handleReject = useCallback(() => {
        dispatch(closeModal())
    }, [dispatch]);

    const handleConfirm = useCallback(() => {
        // @ts-ignore
        const {id} = modalData.data;
        dispatch(returnUserToReview({id}));
        dispatch(closeModal())
    }, [dispatch, modalData])

    return (
        <ReviewedListBox>
            <ModalWindow
                reasonForMatch={USER_MOVING_CONFIRMATION}
                handleConfirm={handleConfirm}
                handleReject={handleReject}
            />
            <Title>{TEXT.reviewedUsers}</Title>
            <UserColumnsTitle>
                <h4>{TEXT.positive}</h4>
                <h4>{TEXT.negative}</h4>
            </UserColumnsTitle>
            <ReviewedUsersListBox>
                <UsersColumn>{positiveUsers}</UsersColumn>
                <UsersColumn>{negativeUsers}</UsersColumn>
            </ReviewedUsersListBox>
        </ReviewedListBox>
    )
}

export default ReviewedList;