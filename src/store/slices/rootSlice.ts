import { combineReducers } from '@reduxjs/toolkit'

import authSlice from './authSlice'

const appReducer = combineReducers({
  auth: authSlice
})

const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
