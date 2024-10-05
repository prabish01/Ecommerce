import ProductList from "@/components/ProductList";
import HeroCarousel from "@/components/ui/HeroCarousel";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <section className="">
        <HeroCarousel />
      </section>
      <section className="container mx-auto my-24 mb-24">
        <h1 className="text-3xl font-bold text-center">Cushioning for your miles</h1>
        <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
      <ProductList />
      </section>
    </div>
  );
};

export default page;
