import React from 'react';

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

import {IconWrapper, RemoveControllerBox} from "./removeController.styled";

interface IRemoveControllerProps {
    handleRemove: () => void,
}

const RemoveController = ({handleRemove}: IRemoveControllerProps) => {
    return (
        <RemoveControllerBox>
            <IconWrapper>
                <RestoreFromTrashIcon onClick={handleRemove} fontSize="large"/>
            </IconWrapper>
        </RemoveControllerBox>
    )
}

export default RemoveController;