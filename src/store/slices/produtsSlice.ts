import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Product, ProductList } from '@/types/productsType'

interface ProductListState {
  product: Product
  productList: ProductList
}

const initialState: ProductListState = {
  product: {
    name: '',
    type: '',
    description: '',
    thumbnail: '',
    minPrice: 0,
    enabled: false
  },
  productList: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<ProductList>) => {
      state.productList = action.payload
    },
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload
    }
  }
})

export const { setProductList, setProduct } = productsSlice.actions
export default productsSlice.reducer
