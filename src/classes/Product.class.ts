import instance from '@/plugins/instance'
import type { AddProductType, ProductList } from '@/types/productsType'
import type { ResponseData } from './../plugins/type'

class Products {
  async getProducts() {
    const response: ResponseData<ProductList> = await instance.call('get', '/v1/web-venues/product')

    return response
  }

  async addProduct(data: AddProductType) {
    const response: ResponseData<AddProductType> = await instance.call('post', '/v1/web-venues/product', data)

    return response
  }

  async updateProduct(id: string, data: AddProductType) {
    const response: ResponseData<AddProductType> = await instance.call('put', `/v1/web-venues/product/${id}`, data)

    return response
  }

  async deleteProduct(id: string) {
    const response = await instance.call('delete', `/v1/web-venues/product/${id}`)

    return response
  }
}

export default Products
