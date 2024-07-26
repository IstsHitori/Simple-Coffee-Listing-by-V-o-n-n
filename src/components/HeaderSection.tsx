import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
export default function HeaderSection() {
  const location = useLocation();
  const isHome = useMemo(() => location.pathname === "/", [location.pathname]);

  return (
    <>
      <div className="text-center md:max-w-[500px] mx-auto">
        <h1 className="text-[#FEF7EE] md:text-4xl text-2xl mb-2 font-semibold">
          Our Collection
        </h1>
        <p className="text-[#6F757C] text-sm md:text-md font-semibold">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>

      <div className="flex text-[#FEF7EE] text-[13px] mt-4 items-center gap-5 justify-center mb-8">
        <NavLink
          className={`${
            isHome ? "bg-gray-500" : ""
          } rounded-md font-semibold p-1.5 px-4 transition-all`}
          to={"/"}
        >
          All Products
        </NavLink>
        <NavLink
          className={`${
            !isHome ? "bg-gray-500" : ""
          } rounded-md font-semibold p-1.5 px-4 transition-all`}
          to={"products/available"}
        >
          Available Now
        </NavLink>
      </div>
    </>
  );
}
