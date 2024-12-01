'use client'
import { Provider } from 'react-redux'

import store from '@/store'

import type { ChildrenType } from '@/@core/types'

const ReduxProvider = ({ children }: ChildrenType) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
