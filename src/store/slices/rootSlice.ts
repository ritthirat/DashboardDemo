import { combineReducers } from '@reduxjs/toolkit'

import userSlice from './userSlice'

const appReducer = combineReducers({
  user: userSlice
})

const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
