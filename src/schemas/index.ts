import { object, array, number, string, boolean, union, null_ } from "valibot";

export const ProductSchema = object({
  id: number(),
  name: string(),
  image: string(),
  price: string(),
  rating: union([number(),string(),null_()]),
  votes: number(),
  popular: boolean(),
  available: boolean(),
});
export const ProductsSchema = array(ProductSchema);
