/** @jsxImportSource react */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={2000}
      transitionTime={500}
      className="w-full"
    >
      <div className="flex justify-center items-center">
        <img
          src="/assets/carrossel/transformacao.svg"
          alt="colorimetria capilar"
          className="w-[200px] h-[100px] object-contain md:w-[400px] md:h-[300px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/assets/carrossel/corte.svg"
          alt="cortes autentênticos"
          className="w-[200px] h-[100px] object-contain md:w-[400px] md:h-[300px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/assets/carrossel/escova.svg"
          alt="tratamento cabelo"
          className="w-[200px] h-[100px] object-contain md:w-[400px] md:h-[300px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/assets/carrossel/cacheado.svg"
          alt="tratamento cabelos cacheado"
          className="w-[200px] h-[100px] object-contain md:w-[400px] md:h-[300px]"
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;