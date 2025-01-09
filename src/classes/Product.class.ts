import instance from '@/plugins/instance'
import type { AddProductType, ProductList, UpdateProductType } from '@/types/productsType'
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

  async updateProduct(productId: string, data: UpdateProductType) {
    const response: ResponseData<UpdateProductType> = await instance.call(
      'put',
      `/v1/web-venues/product/${productId}`,
      data
    )

    return response
  }

  async deleteProduct(id: string) {
    const response = await instance.call('delete', `/v1/web-venues/product/${id}`)

    return response
  }
}

export default Products
