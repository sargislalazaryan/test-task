import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

// import components
import IncrementDecrementController from '../../components/incDecController';
import RemoveController from '../../components/removeController';

// import action creators
import {changeRating, returnUserToReview} from '../../store/userSlice';
import {openModal} from '../../store/modalSlice';

import {
    ControllersWrapper,
    Image,
    Info,
    InfoBox,
    UserCardBox,
} from './users.styled';

// import types
import {IUser} from './index';

import {DECREMENT, INCREMENT, MAX_RATING, MIN_RATING} from '../../constants/app';
import {TEXT} from '../../constants/texts';
import {USER_MOVING_CONFIRMATION} from '../../constants/modal';

interface IUserProps {
    user: IUser
}

const UserCard = ({user}: IUserProps) => {
    const dispatch = useDispatch();
    const {id, first_name, last_name, rating, ratingType, avatar} = user;

    const handleIncrementRating = useCallback(() => {
        dispatch(changeRating({id, direction: INCREMENT}));
        if (rating === MAX_RATING) {
            dispatch(openModal({
                isOpen: true,
                title: TEXT.attention,
                text: `Нужно вознаградить ${first_name}. Сделать это?`,
                reason: USER_MOVING_CONFIRMATION,
                data: {id},
            }))
        }
    }, [dispatch, id, rating, first_name]);

    const handleDecrementRating = useCallback(() => {
        dispatch(changeRating({id, direction: DECREMENT}));
        if (rating === MIN_RATING) {
            dispatch(openModal({
                isOpen: true,
                title: TEXT.attention,
                text: `Пора забанить ${first_name}. Сделать это?`,
                reason: USER_MOVING_CONFIRMATION,
                data: {id},
            }))
        }
    }, [dispatch, id, rating, first_name]);

    const handelReturnUserToReview = useCallback(() => {
        dispatch(returnUserToReview({id}));
    }, [id, dispatch]);


    return (
        <UserCardBox>
            <InfoBox>
                <Info>
                    <h2>ID: {id}</h2>
                    <p>{`${first_name} ${last_name}`}</p>
                    <p>Rating: {rating}</p>
                </Info>
                <Image imgSrc={avatar}/>
            </InfoBox>
            <hr/>
            <ControllersWrapper>
                <IncrementDecrementController
                    handleIncrementRating={handleIncrementRating}
                    handleDecrementRating={handleDecrementRating}
                />
                {ratingType && rating === 0 &&
                  <RemoveController handleRemove={handelReturnUserToReview}/>
                }
            </ControllersWrapper>
        </UserCardBox>
    )
}

export default UserCard;