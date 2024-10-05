import React from "react";
import Menu from "./Menu";
import { Footprints } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
const Header = () => {
  return (
    <div className="container  mx-auto">
      <nav className="flex items-center justify-around h-16">
        <Footprints />
        <Menu />
        <div className="grid grid-cols-2 gap-5">
          <Heart />
          <ShoppingCart />
        </div>
      </nav>
    </div>
  );
};

export default Header;
