import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const menuData = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Categories", subMenuData: true },
  { id: 4, title: "Categories", href: "/contact" },
];

const subMenuData = [
  { id: 1, title: "Shoe1", href: "/submenu1" },
  { id: 2, title: "Shoe2", href: "/submenu2" },
  { id: 3, title: "Shoe3", href: "/submenu3" },
];

export default function Menu() {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList className="gap-5">
          {menuData.map((menu) => (
            <NavigationMenuItem key={menu.id}>
              {menu.subMenuData ? (
                <>
                  <NavigationMenuTrigger className="text-base font-normal">{menu.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {subMenuData.map((subMenu) => (
                        <li key={subMenu.id}>
                          <NavigationMenuLink asChild>
                            <a href={`/category/${subMenu.href} `}className="block select-none rounded-md p-3 text-base font-normal no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              {subMenu.title}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink href={menu.href} className={`${navigationMenuTriggerStyle()} text-base font-normal`}>
                  {menu.title}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
