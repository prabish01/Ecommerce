// import React from "react";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { FadeIn } from "./ui/FadeIn";
// import Link from "next/link";

// const products = [
//   { id: 1, name: "Premium Leather Shoes", price: 199.99, discountPercentage: 15, image: "/p1.png" },
//   { id: 2, name: "Sporty Running Sneakers", price: 129.99, discountPercentage: 20, image: "/p1.png" },
//   { id: 3, name: "Classic Oxford Dress Shoes", price: 159.99, discountPercentage: 10, image: "/p1.png" },
//   { id: 4, name: "Comfortable Loafers", price: 89.99, discountPercentage: 0, image: "/p1.png" },
//   { id: 5, name: "Stylish Ankle Boots", price: 179.99, discountPercentage: 25, image: "/p1.png" },
//   { id: 6, name: "Casual Slip-On Shoes", price: 69.99, discountPercentage: 5, image: "/p1.png" },
// ];

// const ProductList = () => {
//   return (
//     <div className="container my-24 mb-24 mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <>
//             <FadeIn>
//               <Link href={`/product/${product.id}`} passHref>
//                 <Card key={product.id} className="overflow-hidden outline-none shadow-none">
//                   <CardContent className="p-0">
//                     <div className="relative">
//                       <Image src={product.image} height={500} width={500} alt={product.name} className="w-full h-64 object-cover" />
//                       {product.discountPercentage > 0 && <Badge className="absolute top-4 right-4 bg-red-500">{product.discountPercentage}% OFF</Badge>}
//                     </div>
//                     <div className="p-6">
//                       <h2 className="text-xl font-semibold mb-2 line-clamp-2">{product.name}</h2>
//                       <div className="flex justify-between items-center">
//                         <div>
//                           {product.discountPercentage > 0 ? (
//                             <>
//                               <span className="text-2xl font-thin text-primary">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
//                               <span className="text-sm font-thin text-muted-foreground line-through ml-2">${product.price.toFixed(2)}</span>
//                             </>
//                           ) : (
//                             <span className="text-2xl font-thin text-primary">${product.price.toFixed(2)}</span>
//                           )}
//                         </div>
//                         <Badge variant="secondary" className="text-xs">
//                           Free Shipping
//                         </Badge>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </FadeIn>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./ui/FadeIn";

const products = [
  { id: 1, name: "Premium Leather Shoes", price: 199.99, discountPercentage: 15, image: "/p1.png" },
  { id: 2, name: "Sporty Running Sneakers", price: 129.99, discountPercentage: 20, image: "/p1.png" },
  { id: 3, name: "Classic Oxford Dress Shoes", price: 159.99, discountPercentage: 10, image: "/p1.png" },
  { id: 4, name: "Comfortable Loafers", price: 89.99, discountPercentage: 0, image: "/p1.png" },
  { id: 5, name: "Stylish Ankle Boots", price: 179.99, discountPercentage: 25, image: "/p1.png" },
  { id: 6, name: "Casual Slip-On Shoes", price: 69.99, discountPercentage: 5, image: "/p1.png" },
];

interface ProductCardProps {
  product: (typeof products)[0];
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="overflow-hidden outline-none shadow-none">
    <CardContent className="p-0">
      <div className="relative">
        <Image src={product.image} height={500} width={500} alt={product.name} className="w-full h-64 object-cover" />
        {product.discountPercentage > 0 && <Badge className="absolute top-4 right-4 bg-red-500">{product.discountPercentage}% OFF</Badge>}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{product.name}</h2>
        <div className="flex justify-between items-center">
          <div>
            {product.discountPercentage > 0 ? (
              <>
                <span className="text-2xl font-thin text-primary">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                <span className="text-sm font-thin text-muted-foreground line-through ml-2">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-2xl font-thin text-primary">${product.price.toFixed(2)}</span>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            Free Shipping
          </Badge>
        </div>
      </div>
    </CardContent>
  </Card>
);

interface ProductListProps {
  layout?: "grid" | "carousel";
  limit?: number;
}

export default function ProductList({ layout = "grid", limit }: ProductListProps) {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  const productItems = displayedProducts.map((product) => (
    <Link key={product.id} href={`/product/${product.id}`} passHref>
      <FadeIn>
        <ProductCard product={product} />
      </FadeIn>
    </Link>
  ));

  if (layout === "carousel") {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {productItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">{item}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  return (
    <div className="container mx-auto my-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">{productItems}</div>
    </div>
  );
}
