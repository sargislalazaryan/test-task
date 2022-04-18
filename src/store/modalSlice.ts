import {createSlice} from '@reduxjs/toolkit';

interface IInitialState {
    isOpen: boolean,
    title: string,
    text: string,
    reason: string,
    data: {[key: string]: string},
}

const initialState = {
    isOpen: false,
    title: '',
    text: '',
    reason: '',
    data: {} as {[key: string]: string},
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state: IInitialState, {payload: {isOpen, title, text, reason, data}}) {
            state.isOpen = isOpen;
            state.title = title;
            state.text = text;
            state.reason = reason;
            state.data = data;
        },

        closeModal() {
            return initialState
        }
    },
});

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;