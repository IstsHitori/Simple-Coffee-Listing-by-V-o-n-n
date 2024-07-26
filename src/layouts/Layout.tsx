import { Outlet } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
export default function Layout() {

  return (
    <main className="min-h-screen bg-[#111315] relative">
      <div className="bg-[url('/public/bg-cafe.jpg')] min-h-72 bg-center bg-cover"></div>
      <section className="md:w-[1100px] rounded-md bg-[#1B1D1F] w-[300px] mx-auto relative z-10 bottom-20 bg-[url('/public/vector.svg')] py-20 px-10  bg-cover bg-no-repeat">
        {/* HEADER-SECTION */}
        <HeaderSection />
        
        {/* PRODUCTS-SECTION */}
        <Outlet />
      </section>
    </main>
  );
}
