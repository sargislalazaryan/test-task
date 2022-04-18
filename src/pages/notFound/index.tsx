import React from 'react';

// import components
import LayoutContainer from "../../components/layoutContainer";

import { NotFoundBox } from './notFound.styled';
import {MAIN_BG, ScreenSizes} from "../../constants/styles";

const NotFound = () => {
    return (
        <LayoutContainer bgColor={MAIN_BG} mw={ScreenSizes.md}>
            <NotFoundBox/>
        </LayoutContainer>
    )
}

export default NotFound;