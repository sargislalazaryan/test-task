import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";

// import components
import ButtonMUI from '../../components/button';

import {InReviewListBox, Title, UsersListBox} from "./users.styled";
import {fetchUsers} from "../../store/userSlice";
import {TEXT} from '../../constants/texts';

// import types
import {IUser} from "./index";
import UserCard from "./UserCard";

export interface IInReviewListProps {
    users: IUser[]
}

const InReviewList = ({users}: IInReviewListProps) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(2);

    const refreshUsersList = useCallback(() => dispatch(fetchUsers({})), [dispatch]);

    const loadMore = useCallback(() => {
        dispatch(fetchUsers({page, loadMore: true}))
        setPage(page + 1);
    }, [dispatch, page])

    const userList = users
        .filter((user: IUser) => !user.ratingType)
        .map((user: IUser) => <UserCard key={user.id} user={user}/>);

    return (
        <InReviewListBox>
            <Title>{TEXT.usersInReview}</Title>
            <ButtonMUI
                title={TEXT.listUpdate}
                color="success"
                variant="outlined"
                handleClick={refreshUsersList}
            />
            <UsersListBox>{userList}</UsersListBox>
            <ButtonMUI
                title={TEXT.loadMore}
                color="success"
                variant="contained"
                handleClick={loadMore}
            />
        </InReviewListBox>
    )
}

export default InReviewList;