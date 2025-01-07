export type ProductList = Array<{
  id: string
  venues_id: string
  order_index: number
  name: string
  type: string
  description: string
  thumbnail: string
  minPrice: number
  enabled: boolean
  createAt: string
  updatedAt: string
}>

export type AddProductType = {
  name: string
  type: string
  description: string
  thumbnail: string | null
  minPrice: number
}
