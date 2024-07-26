import { useLoaderData } from "react-router-dom";
import { getProducts } from "../helpers";
import { Product } from "../types";
import ProductDetail from "../components/ProductDetail";

export async function loader() {
  const products = await getProducts();
  return products;
}

export default function AllProducts() {
  const products = useLoaderData() as Product[];
  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
}
