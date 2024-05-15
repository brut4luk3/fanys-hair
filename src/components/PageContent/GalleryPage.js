/** @jsxImportSource react */
"use client";
import React, { useState, useRef } from 'react';
import ScrollArrow from '@/components/ScrollArrow';
import Image from 'next/image';
import Form from '@/components/Form';

export default function GalleryPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const articleRef = useRef(null);
    const formRef = useRef(null);

    const scrollToArticle = () => {
        articleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const openModal = (imageName) => {
        setModalImage(imageName);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="flex flex-col items-center">
            <section className="relative w-full overflow-hidden">
                <div className="h-[500px] md:h-[600px] md:bg-parallax-gallery bg-parallax-gallery-mobile md:bg-cover bg-center bg-fixed"></div>
                <ScrollArrow onClick={scrollToArticle} />
            </section>
            <article ref={articleRef} className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-20">
                <div className="flex flex-col sm:flex-row items-center my-10">
                    <div className="sm:flex-1 sm:pr-5 mb-10">
                        <h3 className="text-3xl sm:text-4xl mb-4">Meu trabalho é minha arte...</h3>
                        <p>
                            E lhe convido a vislumbrar o que tenho feito ao longo de minha carreira, e ainda a partilhar com você o que tenho aprendido.
                        </p>
                        <br />
                        <p>
                            Abaixo você encontrará alguns dos meus mais lindos trabalhos, dos quais me orgulho profundamente.
                        </p>
                    </div>
                </div>
            </article>

            <article className="w-full max-w-5xl p-5 text-lg relative z-20 flex flex-col items-center justify-center">
                <h4 className="text-2xl md:text-3xl font-bold uppercase text-center">Clique nas fotos para aumentá-las</h4>
                <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
                    {['Rainbow Hair', 'Mexas coloridas', 'Degradê', 'Tattoo Hair', 'Cacheado colorido', 'Colorido metálico'].map((imageName) => (
                        <div key={imageName} className="w-1/3 sm:w-1/5 p-1 hover:scale-105 transition-transform relative cursor-pointer" onClick={() => openModal(imageName)} onMouseOver={() => { }} onMouseOut={() => { }}>
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
                <div className='flex justify-center items-center my-10'>
                    <h4 className="text-2xl md:text-3xl font-bold uppercase text-center">Quer fazer parte desta transformação?</h4>
                </div>
                <div className="flex justify-center items-center mb-20">
                    <button onClick={scrollToForm} className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
                        Agende agora!
                    </button>
                </div>
            </article>

            <article ref={formRef} className="w-full max-w-5xl p-5 text-lg my-10 relative z-20 flex flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center my-10">
                    <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
                    <span className="flex-shrink mx-4">
                        <h1 className="text-3xl font-bold uppercase">Agende aqui</h1>
                    </span>
                    <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
                </div>

                <Form />
            </article>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-5 z-50" onClick={closeModal}>
                    <div className="relative p-5 rounded-lg shadow-lg text-center bg-white mx-auto max-w-3xl max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
                        <Image
                            src={`/assets/${modalImage}.png`}
                            alt={`Obra de arte ${modalImage}`}
                            layout="responsive"
                            width={380}
                            height={600}
                            objectFit="contain"
                            className="max-h-[70vh] max-w-[90vw] m-auto"
                            quality={100}
                        />
                        <p className="text-lg text-black mt-2">{modalImage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}