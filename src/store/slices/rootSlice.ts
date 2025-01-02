import { combineReducers } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import productsSlice from './produtsSlice'

const appReducer = combineReducers({
  auth: authSlice,
  products: productsSlice
})

const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
