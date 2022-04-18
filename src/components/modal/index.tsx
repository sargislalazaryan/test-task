import * as React from 'react';
import {useSelector} from 'react-redux';

// import components
import ButtonMUI from "../button";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// import selectors
import {modal} from '../../selectors/modal';

import {ModalBox, ModalControls} from "./modal.styled";

import {TEXT} from '../../constants/texts';

interface IModalWindowProps {
    reasonForMatch: string;
    handleConfirm: () => void;
    handleReject: () => void;
}

const ModalWindow = ({reasonForMatch, handleConfirm, handleReject}: IModalWindowProps) => {
    const {isOpen, title, text, reason} = useSelector(modal);

    return (
        <Modal
            open={isOpen && reason === reasonForMatch}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBox>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    {text}
                </Typography>
                <ModalControls>
                    <ButtonMUI title={TEXT.yes} variant='contained' color='success' handleClick={handleConfirm}/>
                    <ButtonMUI title={TEXT.no} variant='outlined' color='warning' handleClick={handleReject}/>
                </ModalControls>
            </ModalBox>
        </Modal>
    );
}

export default ModalWindow;