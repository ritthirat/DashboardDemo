import type { Dispatch } from '@reduxjs/toolkit'

import Products from '@/classes/Product.class'
import { setProductList } from '../slices/produtsSlice'

const products = new Products()

export const getProductsList = async (dispatch: Dispatch) => {
  try {
    const response = await products.getProducts()

    dispatch(setProductList(response.data))

    return response
  } catch (error) {
    console.log(error)
  }
}
