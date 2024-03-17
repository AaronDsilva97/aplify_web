"use client";

import { Carousel } from "flowbite-react";

interface CarouselComponentProps {
  slideInterval: number;
  images: string[];
}

function CarouselComponent(props: CarouselComponentProps) {
  const { slideInterval, images } = props;
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={slideInterval}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="..."
            className="w-full h-auto object-contain"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
