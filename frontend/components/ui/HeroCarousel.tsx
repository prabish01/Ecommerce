"use client";

import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  return (
    <Carousel
      className="container mx-auto "
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="relative w-full aspect-video  overflow-hidden rounded-lg">
            <Image src="/slide-1.png" alt="Slide 1" height={1920} width={1080} className=" h-full w-full object-cover" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative w-full aspect-video  overflow-hidden rounded-lg">
            <Image src="/slide-2.png" alt="Slide 1" height={1920} width={1080} className=" h-full w-full object-cover" />
          </div>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <div className="relative w-full aspect-video  overflow-hidden rounded-lg">
            <Image src="/slide-3.png" alt="Slide 1" height={1920} width={1080} className=" h-full w-full object-cover" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
