import { MultiSelectFC } from '../../components/multiSelect'
import {
    HomeWrapper,
    MultiSelectsWrapper,
    Title,
} from './Home.styled'

import { useGetUsersQuery } from '../../store/users/users.api'


export interface IUser {
    id: number,
    name: string,
}

export const Home = () => {
    const { isLoading, data = [] } = useGetUsersQuery()

    return (
        <HomeWrapper>
            <Title>HOME PAGE</Title>
            <MultiSelectsWrapper>
                {isLoading
                    ? <h2>Please wait, loading...</h2>
                    : <MultiSelectFC options={data} />
                }
            </MultiSelectsWrapper>
        </HomeWrapper>
    )
}