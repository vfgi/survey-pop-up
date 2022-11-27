import { createSlice } from "@reduxjs/toolkit"
import { ReactElement } from "react"
// import { RootState } from '../rootReducers'

export interface ModalState {
    isOpened: boolean,
    children?: ReactElement
}

export const initialState: ModalState = {
    isOpened: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpened = true
        },
        closeModal: (state) => {
            state.isOpened = false
        }
    },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
