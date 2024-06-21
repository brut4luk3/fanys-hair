/** @jsxImportSource react */
"use client";
import React, { useState, useRef, useEffect } from 'react';
import ScrollArrow from '@/components/ScrollArrow';
import Form from '@/components/Form';
import Select from 'react-select';
import Image from 'next/image';
import { useRouter } from 'next/router';

const categories = [
    { value: "Cortes exóticos", label: "Cortes exóticos" },
    { value: "Colorido global", label: "Colorido global" },
    { value: "Mechas coloridas", label: "Mechas coloridas" },
    { value: "Mechas localizadas", label: "Mechas localizadas" },
    { value: "Tattoo Hair", label: "Tattoo Hair" },
    { value: "Mechas loiras", label: "Mechas loiras" },
    { value: "Morena iluminada", label: "Morena iluminada" },
    { value: "Coloração e retoque de raiz", label: "Coloração e retoque de raiz" },
    { value: "Tonalização e matização", label: "Tonalização e matização" },
    { value: "Ruivos", label: "Ruivos" },
    { value: "Progressiva e botox", label: "Progressiva e botox" },
    { value: "Sobrancelha", label: "Sobrancelha" },
    { value: "Penteados", label: "Penteados" }
];

const galleryImages = {
    "Cortes exóticos": ['corte1', 'corte2', 'corte3', 'corte4', 'corte5'],
    "Colorido global": ['coloridoglobal1', 'coloridoglobal2', 'coloridoglobal3', 'coloridoglobal4', 'coloridoglobal5', 'coloridoglobal6'],
    "Mechas coloridas": ['mechacolorida1', 'mechacolorida2', 'mechacolorida3', 'mechacolorida4', 'mechacolorida5', 'mechacolorida6'],
    "Mechas localizadas": ['mechalocalizada1', 'mechalocalizada2', 'mechalocalizada3', 'mechalocalizada4', 'mechalocalizada5', 'mechalocalizada6'],
    "Tattoo Hair": ['tattoohair1', 'tattoohair2', 'tattoohair3', 'tattoohair4'],
    "Mechas loiras": ['mechaloira1', 'mechaloira2', 'mechaloira3', 'mechaloira4', 'mechaloira5', 'mechaloira6'],
    "Morena iluminada": ['coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon'],
    "Coloração e retoque de raiz": ['coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon'],
    "Tonalização e matização": ['coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon'],
    "Ruivos": ['coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon'],
    "Progressiva e botox": ['coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon'],
    "Sobrancelha": ['coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon'],
    "Penteados": ['coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon', 'coming_soon']
};

export default function GalleryPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [loadingModal, setLoadingModal] = useState(false);
    const articleRef = useRef(null);
    const formRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const categoryFromQuery = router.query.category;
        if (categoryFromQuery) {
            setSelectedCategories([{ value: categoryFromQuery, label: categoryFromQuery }]);
            setTimeout(() => {
                articleRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [router.query.category]);

    const scrollToArticle = () => {
        articleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const openModal = (category, imageName) => {
        setLoadingModal(true);
        setSelectedCategory(category);
        setModalImage(imageName);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            setLoadingModal(false);
        }, 2000);
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        const images = galleryImages[selectedCategory];
        const currentIndex = images.indexOf(modalImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setModalImage(images[nextIndex]);
    };

    const prevImage = () => {
        const images = galleryImages[selectedCategory];
        const currentIndex = images.indexOf(modalImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setModalImage(images[prevIndex]);
    };

    const handleFilterChange = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    };

    const selectedCategoriesValues = selectedCategories.map(option => option.value);
    const displayAll = selectedCategoriesValues.length === 0;

    return (
        <div className="flex flex-col items-center">
            <section className="relative w-full overflow-hidden">
                <div className="h-[500px] md:h-[600px] md:bg-parallax-gallery bg-parallax-gallery-mobile md:bg-cover bg-center bg-fixed"></div>
                <ScrollArrow onClick={scrollToArticle} />
            </section>
            <article ref={articleRef} className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-20">
                <div className="flex flex-col sm:flex-row items-center my-10">
                    <div className="sm:flex-1 sm:pr-5">
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

            <article className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-30">
                <Select
                    isMulti
                    options={categories}
                    value={selectedCategories}
                    onChange={handleFilterChange}
                    className="w-full max-w-lg mx-auto z-40"
                    placeholder="Filtrar serviços"
                />
            </article>

            {displayAll ? categories.map(category => (
                <article key={category.value} className="w-full max-w-5xl p-5 text-lg relative z-20 flex flex-col items-center justify-center">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase text-center">{category.label}</h4>
                    <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
                        {galleryImages[category.value].map((imageName) => (
                            <div key={imageName} className="w-1/3 sm:w-1/5 p-1 hover:scale-105 transition-transform relative cursor-pointer" onClick={() => openModal(category.value, imageName)}>
                                <Image
                                    src={`/assets/galeria/${imageName}.png`}
                                    alt={`${imageName}`}
                                    width={100}
                                    height={100}
                                    layout="responsive"
                                    objectFit="cover"
                                />
                                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">Aumentar</span>
                            </div>
                        ))}
                    </div>
                </article>
            )) : selectedCategories.map(category => (
                <article key={category.value} className="w-full max-w-5xl p-5 text-lg relative z-20 flex flex-col items-center justify-center">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase text-center">{category.label}</h4>
                    <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
                        {galleryImages[category.value].map((imageName) => (
                            <div key={imageName} className="w-1/3 sm:w-1/5 p-1 hover:scale-105 transition-transform relative cursor-pointer" onClick={() => openModal(category.value, imageName)}>
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
                </article>
            ))}

            <article className="w-full max-w-5xl p-5 text-lg my-10 relative z-20 flex flex-col items-center justify-center">
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
                    <div className="relative p-5 rounded-lg shadow-lg text-center bg-white mx-auto max-w-3xl max-h-[150vh] overflow-hidden" onClick={e => e.stopPropagation()}>
                        {loadingModal ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="loader"></div>
                            </div>
                        ) : (
                            <>
                                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r" onClick={prevImage}>◀</button>
                                <Image
                                    src={`/assets/galeria/${modalImage}.png`}
                                    alt={`Obra de arte ${modalImage}`}
                                    layout="responsive"
                                    width={400}
                                    height={620}
                                    objectFit="contain"
                                    className="max-h-[80vh] max-w-[100vw] m-auto"
                                    quality={100}
                                />
                                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l" onClick={nextImage}>▶</button>
                                <div className="flex justify-center space-x-2 mt-4 overflow-x-auto">
                                    {galleryImages[selectedCategory].map((imageName, index) => (
                                        <div key={index} className="flex-shrink-0 w-12 h-16 cursor-pointer" onClick={() => setModalImage(imageName)}>
                                            <Image
                                                src={`/assets/galeria/${imageName}.png`}
                                                alt={`Thumbnail ${imageName}`}
                                                width={44}
                                                height={44}
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}