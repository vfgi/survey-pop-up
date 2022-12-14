import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export interface StepState {
    step: number,
}

export const initialState: StepState = {
    step: Number(localStorage.getItem('step')) || 1,
}

export const stepSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        }
    },
})

export const { changeStep } = stepSlice.actions

export default stepSlice.reducer
