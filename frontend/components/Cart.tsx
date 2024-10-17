"use client";

import React from "react";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const cartItems = [
  { id: 1, name: "Jordan Retro 6 G", category: "Men's Golf Shoes", price: 19695.0, image: "/p1.png" },
  { id: 2, name: "Jordan Retro 6 G", category: "Men's Golf Shoes", price: 19695.0, image: "/p1.png" },
  { id: 3, name: "Jordan Retro 6 G", category: "Men's Golf Shoes", price: 19695.0, image: "/p1.png" },
];

export default function ShoppingCart() {
  const [items, setItems] = React.useState(cartItems);
  const [quantities, setQuantities] = React.useState(items.map(() => 1));

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (index: number, delta: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  const total = items.reduce((sum, item, index) => sum + item.price * quantities[index], 0);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item, index) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Select defaultValue="UK 6">
                          <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UK 6">UK 6</SelectItem>
                            <SelectItem value="UK 7">UK 7</SelectItem>
                            <SelectItem value="UK 8">UK 8</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex items-center">
                          <Button variant="outline" size="icon" onClick={() => updateQuantity(index, -1)} disabled={quantities[index] === 1}>
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{quantities[index]}</span>
                          <Button variant="outline" size="icon" onClick={() => updateQuantity(index, 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$ {(item.price * quantities[index]).toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-semibold">$ {total.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground">The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Checkout</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
