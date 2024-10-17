"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const ProductDetails = () => {
  const [changeImg, setChangeImg] = useState("/p1.png");

  const mainImg = (e) => {
    setChangeImg(e.target.src);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-[400px] h-[400px]">
        <Image src={changeImg} onClick={mainImg} alt="Main product" id="changeImg" className="w-full h-full object-cover" width="300" height="400" />
      </div>
      <div className="flex space-x-4">
        <div className="border-2 border-blue-500 p-1">
          <Image src="/p2.png" onClick={mainImg} alt="Thumbnail 1" className="w-[80px] h-[80px] object-cover" width="80" height="80" />
        </div>
        <div>
          <Image src="/p3.png" onClick={mainImg} alt="Thumbnail 2" className="w-[80px] h-[80px] object-cover" width="80" height="80" />
        </div>
        <div>
          <Image src="/p4.png" onClick={mainImg} alt="Thumbnail 3" className="w-[80px] h-[80px] object-cover" width="80" height="80" />
        </div>
        <div>
          <Image src="/p5.png" onClick={mainImg} alt="Thumbnail 4" className="w-[80px] h-[80px] object-cover" width="80" height="80" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
