import React from 'react';

import {IconWrapper, ControllerBox} from "./incrementDecrementController.styled";

import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

interface IIncrementDecrementControllerProps {
    handleIncrementRating: () => void;
    handleDecrementRating: () => void;
}

const IncrementDecrementController = ({
                                          handleIncrementRating,
                                          handleDecrementRating
                                      }: IIncrementDecrementControllerProps
) => {
    return (
        <ControllerBox>
            <IconWrapper>
                <AddBoxIcon onClick={handleIncrementRating} fontSize="large"/>
            </IconWrapper>
            <IconWrapper>
                <IndeterminateCheckBoxIcon onClick={handleDecrementRating} fontSize="large"/>
            </IconWrapper>
        </ControllerBox>
    )
}

export default IncrementDecrementController;
