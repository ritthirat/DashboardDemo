import instance from '@/plugins/instance'
import type { ProductList } from '@/types/productsType'
import type { ResponseData } from './../plugins/type'

class Products {
  async getProducts() {
    const response: ResponseData<ProductList> = await instance.call(
      'get',
      'https://api.urwarp.com/v1/web-venues/product'
    )

    return response
  }
}

export default Products
