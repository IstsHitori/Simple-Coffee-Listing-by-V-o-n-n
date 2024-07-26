import { Product } from "../types";

import estrellaConLuz from "/Star_fill.svg";
import estrellaSinLuz from "/Star.svg";
type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const { name, image, price, rating, votes, popular, available } = product;
  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden">
        <img
          className="transition-all hover:scale-110"
          src={image}
          alt={`${name}-image`}
        />
        <div
          className={`${
            popular ? "visible" : "invisible"
          } absolute top-3 left-4 text-[12px] bg-[#F6C768] rounded-3xl px-3 py-1 font-bold text-[#1B1D1F] `}
        >
          {popular ? "Popular" : ""}
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <p className="text-[#FEF7EE] font-semibold md:text-sm text-[12px]">
          {name}
        </p>
        <div className="p-1 bg-[#BEE3CC] rounded-md">
          <p className="text-[#1B1D1F] text-[11px] font-black">{price}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1">
        {rating !== null ? (
          <>
            <div className="flex items-center justify-center gap-1">
              <img src={estrellaConLuz} alt={`${name}-star`} />
              <p className="flex items-center justify-center text-[#6F757C] font-bold text-[13px]">
                <span className="text-[#FEF7EE] font-semibold mr-1">
                  {rating}
                </span>{" "}
                ({votes} votes)
              </p>
            </div>
            <p className="text-[#ED735D] text-sm">
              {available ? "" : "Sold out"}
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center gap-1">
              <img src={estrellaSinLuz} alt={`${name}-star`} />
              <p className="flex items-center justify-center text-[#6F757C] font-bold text-[13px]">
                <span className="text-[#6F757C] font-semibold mr-1">
                  {"No ratings"}
                </span>{" "}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
