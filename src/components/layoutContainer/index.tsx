import React, {ReactElement} from 'react';

import {
    Container,
    PaddingWrapper,
} from './container.styled';
import {TRANSPARENT} from '../../constants/styles';

interface ILayoutContainerProps {
    mw: string;
    bgColor?: string;
    children: ReactElement;
}

const LayoutContainer = ({mw, bgColor = TRANSPARENT, children}: ILayoutContainerProps) => {
    return (
        <React.Fragment>
            <Container mw={mw} bgColor={bgColor}>
                <PaddingWrapper>
                    {children}
                </PaddingWrapper>
            </Container>
        </React.Fragment>
    );
}

export default LayoutContainer;