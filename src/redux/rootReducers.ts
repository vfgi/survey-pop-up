import { combineReducers } from '@reduxjs/toolkit'
import modal from './reducers/modal'
import step from './reducers/steps'

const rootReducer = combineReducers({
    modalState: modal,
    stepState: step
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer