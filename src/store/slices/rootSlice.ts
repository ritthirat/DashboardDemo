import { combineReducers } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import productsSlice from './produtsSlice'
import serviceSlice from './serviceSlice'

const appReducer = combineReducers({
  auth: authSlice,
  products: productsSlice,
  service: serviceSlice
})

const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
