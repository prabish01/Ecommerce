import ProductDetails from "@/components/ProductDetails";
import ProductList from "@/components/ProductList";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: PageProps) => {
  const { slug } = params;

  return (
    <div className="container mx-auto my-24 mb-24  ">
      <div className="container grid grid-cols-2 ">
        <section className=" justify-items-center h-24i ">
          <div>
            <ProductDetails />
          </div>
        </section>
        <section className=" w-full">
          <div className="">
            <h1 className="text-3xl font-semibold">Jordan Pd 2002</h1>
            <h3 className="font-medium text-xl">Mens golf Shoe</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>

            <div className="justify-between items-center mt-4">
              <h1 className="text-2xl font-semibold"> Price: $200</h1>
              <p className="text-gray-500">Incl. of all taxes</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2">
            <div className="text-lg font-medium">Select Size</div>
            <div className="text-lg text-gray-500">Size Guide</div>
          </div>
          {/* uk size selection with button hover effect */}

          <div className="mt-4 grid grid-cols-4 w-[30rem] gap-4">
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-black hover:text-white">7</button>
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-black hover:text-white">7</button>
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-black hover:text-white">7</button>
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-black hover:text-white">7</button>
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-black hover:text-white">8</button>
            <button className="bg-gray-200 p-2 cursor-not-allowed rounded-lg hover:bg-black hover:text-white">9</button>
            <button className="bg-gray-200 p-2 cursor-not-allowed rounded-lg hover:bg-black hover:text-white">10</button>
          </div>
          <div className="mt-10 w-[30rem] grid grid-cols-2 gap-5">
            <button className="bg-black text-white p-2 rounded-lg">Buy Now</button>
            <button className="bg-gray-200 p-2 rounded-lg">Add to Cart</button>
          </div>
          <div className="mt-10 w-[30rem] grid grid-cols-1 gap-2">
            <div className="text-lg font-medium ">Product Details</div>
            <div className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente accusamus laudantium recusandae amet nesciunt soluta adipisci dolor ducimus assumenda corrupti repudiandae reiciendis, perspiciatis voluptate, ipsam laborum ipsum. Iste quod sequi perspiciatis eveniet deserunt
              magni nostrum fugiat tempora quaerat ab maiores labore, sit recusandae at accusantium eligendi quasi consectetur nesciunt?
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className=" mt-16  justify-center items-center">
          <h1 className="text-center mb-10 text-2xl font-semibold">Related Products</h1>
          {/* <div className=" flex items-center justify-center"> */}
          <ProductList layout="carousel" />
          {/* </div> */}
        </section>
      </div>
    </div>
  );
};

export default page;
