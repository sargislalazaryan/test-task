import React from 'react';
import {Link} from 'react-router-dom';
import {HomeBox, SectionItem, SectionItemBorder, SectionItemWrapper, Title} from "./home.styled";
import LayoutContainer from '../../components/layoutContainer';
import {ScreenSizes} from '../../constants/styles';

const Home = () => {
    return (
        <LayoutContainer mw={ScreenSizes.md}>
            <HomeBox>
                <Link to={'/users'}>
                    <SectionItemWrapper>
                        <SectionItemBorder>
                            <SectionItem/>
                        </SectionItemBorder>
                        <Title>USERS</Title>
                    </SectionItemWrapper>
                </Link>
            </HomeBox>
        </LayoutContainer>
    )
}

export default Home;