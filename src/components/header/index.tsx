import React from 'react';
import { Link } from 'react-router-dom';

// import components
import LayoutContainer from '../layoutContainer';

import {HeaderBox, HeaderWrapper, Logo, UserAuth} from './header.styled';
import {ScreenSizes} from '../../constants/styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <LayoutContainer mw={ScreenSizes.md}>
                <HeaderBox>
                    <Link to='/'><Logo /></Link>
                    <UserAuth/>
                </HeaderBox>
            </LayoutContainer>
        </HeaderWrapper>
    )
}

export default Header;