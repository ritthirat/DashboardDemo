import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ProductList } from '@/types/productsType'

interface ProductListState {
  productList: ProductList
}

const initialState: ProductListState = {
  productList: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<ProductList>) => {
      state.productList = action.payload
    }
  }
})

export const { setProductList } = productsSlice.actions
export default productsSlice.reducer
