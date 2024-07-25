/** @jsxImportSource react */
"use client";
import React, { useRef, useState, useEffect } from 'react';
import ScrollArrow from '@/components/ScrollArrow';
import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import Form from '@/components/Form';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const articleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const scrollToArticle = () => {
    articleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <section className="relative w-full overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center h-[500px] md:h-[600px]">
            <div className="loader" />
          </div>
        ) : (
          <div className="h-[500px] md:h-[600px] md:bg-parallax-contact bg-parallax-contact-mobile md:bg-cover bg-center bg-fixed"></div>
        )}
        <ScrollArrow onClick={scrollToArticle} />
      </section>
      <article ref={articleRef} className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-20">
        <div className="sm:flex-1 flex justify-center items-center">
          <Image
            src="/assets/logo.svg"
            alt="Foto de Fany"
            width={700}
            height={700}
          />
        </div>
        <div className="flex flex justify-center items-center space-x-4 px-5">
          <h4 className='font-bold'>Existem 3 canais para agendamento:</h4>
        </div>
        <div className="flex flex-col space-y-4 px-5">
          <div className="flex justify-center items-center space-x-4 mt-10 px-5">
            <p>1. Whatsapp </p>
            <a href="https://api.whatsapp.com/send?phone=5547996762813" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/whatsapp.png" alt="WhatsApp" width={54} height={54} className='hover:scale-105 transition duration-300' />
            </a>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-10 px-5">
            <p>2. Instagram </p>
            <a href="https://www.instagram.com/fanys_hair" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/instagram.png" alt="Instagram" width={54} height={54} className='hover:scale-105 transition duration-300' />
            </a>
          </div>
          <div className="flex justify-center items-center hover:scale-105 transition duration-300 space-x-4 mt-10 px-5">
            <button onClick={scrollToForm}>3. Formulário do site</button>
          </div>
        </div>
        <div className="w-full my-10">
          <div className="flex justify-center items-center space-x-4 px-5 my-10">
            <p>Agende um horário comigo e inicie com tudo a sua <span className='font-bold'>jornada colorida</span>!</p>
          </div>
          <ImageCarousel />
        </div>
      </article>

      <article ref={formRef} className="w-full max-w-5xl p-5 text-lg mb-10 relative z-20 flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center my-10">
          <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
          <span className="flex-shrink mx-4">
            <h1 className="text-3xl font-bold uppercase">Agende agora!</h1>
          </span>
          <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
        </div>

        <Form />
      </article>
    </div>
  );
}