import { useLoaderData } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { getProducts } from "../helpers";
import { Product } from "../types";

export async function loader() {
  const products = await getProducts();

  return products;
}

export default function AvailableProducts() {
  const products = useLoaderData() as Product[];
  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-5">
      {products.map((product) =>
        product.available ? (
          <ProductDetail key={product.id} product={product} />
        ) : null
      )}
    </div>
  );
}
