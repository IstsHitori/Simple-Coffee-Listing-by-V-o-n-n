import { InferOutput } from "valibot";
import { ProductSchema, ProductsSchema } from "../schemas";

export type Products = InferOutput<typeof ProductsSchema>;
export type Product = InferOutput<typeof ProductSchema>;
