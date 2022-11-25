import { combineReducers } from '@reduxjs/toolkit'
import modal from './reducers/modal'

const rootReducer = combineReducers({
    modalState: modal,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer