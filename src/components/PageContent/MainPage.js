/** @jsxImportSource react */
"use client";
import React, { useState, useRef, useEffect } from 'react';
import ScrollArrow from '@/components/ScrollArrow';
import Image from 'next/image';
import Form from '@/components/Form';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MainPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const articleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(loadingTimeout);
    };
  }, []);

  const scrollToArticle = () => {
    articleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (imageName) => {
    if (!isMobile) {
      setModalImage(imageName);
      setModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const artworkImages = [
    'coloridoglobal6', 'coloridoglobal3', 'mechacolorida6', 'tattoohair1', 'corte2', 'coloridoglobal4'
  ];

  return (
    <div className="flex flex-col items-center bg-white">
      <section className="relative w-full overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center h-[500px] md:h-[600px]">
            <div className="loader" />
          </div>
        ) : (
          <div className="h-[500px] md:h-[600px] md:bg-parallax bg-parallax-mobile md:bg-cover bg-center bg-fixed"></div>
        )}
        <ScrollArrow onClick={scrollToArticle} />
      </section>
      <article ref={articleRef} className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-20 border-solid border-[#C24F64] border-b-[3px]">
        <div className="flex flex-col sm:flex-row items-center my-10">
          <div className="sm:flex-1 sm:pr-5 mb-10">
            <h1 className="text-4xl sm:text-5xl uppercase mb-4">Essa sou eu...</h1>
            <p>
              Com mais de 04 anos de formação e ampla experiência, lhe ofereço a experiência de <span className='italic font-bold'>"fui fazer o cabelo na casa da minha amiga"</span>, podendo lhe garantir um atendimento personalizado e memorável!
            </p>
            <br />
            <p>
              Sou, sobre tudo, uma artista com as cores, e seus cabelos são minha tela! Estou aqui pra revolucionar a forma como você define sua beleza, pra valorizar seus traços únicos e lhe fazer enxergar tudo que há de melhor em você!
            </p>
          </div>
          <div className="sm:flex-1 flex justify-center items-center">
            <Image
              src="/assets/fany.png"
              alt="Foto de Fany"
              width={400}
              height={400}
              objectFit="contain"
              className="rotate-6"
            />
          </div>
        </div>
      </article>

      <article className="w-full max-w-5xl p-5 text-lg my-10 relative z-20 flex flex-col items-center justify-center border-solid border-[#C24F64] border-b-[3px]">
        <h1 className="text-2xl md:text-3xl font-bold uppercase my-10 text-center">Veja algumas das minhas obras de arte</h1>
        {isMobile ? (
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={3000}
            className="w-full"
          >
            {artworkImages.map((imageName) => (
              <div key={imageName} className="flex justify-center items-center">
                <Image
                  src={`/assets/galeria/${imageName}.png`}
                  alt={`Obra de arte ${imageName}`}
                  width={300}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="flex justify-center items-center flex-wrap gap-4">
            {artworkImages.map((imageName) => (
              <div key={imageName} className="w-1/3 sm:w-1/4 p-1 hover:scale-105 transition-transform relative cursor-pointer" onClick={() => openModal(imageName)} onMouseOver={() => { }} onMouseOut={() => { }}>
                <Image
                  src={`/assets/galeria/${imageName}.png`}
                  alt={`Obra de arte ${imageName}`}
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">Aumentar</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-20 mt-10 my-20">
          <a href="https://api.whatsapp.com/send?phone=5547996762813" target="_blank" rel="noopener noreferrer" className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300 flex items-center justify-center">
            Me chama
          </a>
          <button onClick={scrollToForm} className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
            Agende
          </button>
          <a href="https://www.instagram.com/fanys_hair" target="_blank" rel="noopener noreferrer" className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300 flex items-center justify-center">
            Me siga
          </a>
        </div>
      </article>

      <article ref={formRef} className="w-full max-w-5xl p-5 text-lg my-5 relative z-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold uppercase my-10 text-center">Depoimentos das minhas clientes</h1>
        <div className="bg-[#E5E6E6] p-5 rounded shadow flex flex-col sm:flex-row justify-center items-center w-full mb-10 hover:scale-105 transition duration-300">
          <Image
            src="/assets/girl1.png"
            alt="Depoimento 1"
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
            className="rounded-full mb-4 sm:mb-0 sm:mr-4"
          />
          <p className="text-center italic">
            "Me senti indo na casa da minha melhor amiga e saindo de lá com minha autoestima lá em cima! Super recomendo!"
          </p>
        </div>
        <div className="bg-[#E5E6E6] p-5 rounded shadow flex flex-col sm:flex-row justify-center items-center w-full mb-10 hover:scale-105 transition duration-300">
          <Image
            src="/assets/girl2.png"
            alt="Depoimento 2"
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
            className="rounded-full mb-4 sm:mb-0 sm:mr-4"
          />
          <p className="text-center italic">
            "Fazer o cabelo contigo é sempre uma experiência maravilhosa, é um ambiente seguro pra gente ser acolhida e se expressar da forma que queremos com os cabelos, meus cachos só evoluíram desde que você começou a cuidar deles."
          </p>
        </div>
        <div className="bg-[#E5E6E6] p-5 rounded shadow flex flex-col sm:flex-row justify-center items-center w-full mb-10 hover:scale-105 transition duration-300">
          <Image
            src="/assets/girl3.png"
            alt="Depoimento 3"
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
            className="rounded-full mb-4 sm:mb-0 sm:mr-4"
          />
          <p className="text-center italic">
            "Eu tinha vergonha de pintar o cabelo e ser eu mesma, hoje eu não tenho mais medo, pois tenho a melhor cabeleireira do mundo cuidando dos meus cabelos!"
          </p>
        </div>
      </article>

      <article ref={formRef} className="w-full max-w-5xl p-5 text-lg my-10 relative z-20 flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center my-10">
          <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
          <span className="flex-shrink mx-4">
            <h1 className="text-3xl font-bold uppercase">Venha colorir a sua vida!</h1>
          </span>
          <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
        </div>

        <Form />
      </article>

      <section className="relative w-full overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center h-[700px] md:h-[800px]">
            <div className="loader" />
          </div>
        ) : (
          <div className="h-[700px] md:h-[800px] bg-parallax-polaroid-mobile bg-center md:bg-parallax-polaroid bg-cover bg-fixed mb-50"></div>
        )}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-5 z-50" onClick={closeModal}>
          <div className="relative p-5 rounded-lg shadow-lg text-center bg-white mx-auto max-w-3xl max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <Image
              src={`/assets/galeria/${modalImage}.png`}
              alt={`Obra de arte ${modalImage}`}
              layout="responsive"
              width={380}
              height={600}
              objectFit="contain"
              className="max-h-[70vh] max-w-[90vw] m-auto"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}