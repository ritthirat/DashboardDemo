import type { Dispatch } from '@reduxjs/toolkit'

import Products from '@/classes/Product.class'
import { setProductList } from '../slices/produtsSlice'
import type { AddProductType } from '@/types/productsType'

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

export const addProduct = async (dispatch: Dispatch, data: AddProductType) => {
  try {
    const response = await products.addProduct(data)

    getProductsList(dispatch)

    return response
  } catch (error) {
    console.log(error)
  }
}

export const deleteProduct = async (dispatch: Dispatch, id: string) => {
  try {
    const response = await products.deleteProduct(id)

    getProductsList(dispatch)

    return response
  } catch (error) {
    console.log(error)
  }
}
