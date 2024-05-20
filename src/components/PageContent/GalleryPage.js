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
    "Cortes exóticos": ['Cortes_exoticos1', 'Cortes_exoticos2', 'Cortes_exoticos3', 'Cortes_exoticos4', 'Cortes_exoticos5', 'Cortes_exoticos6'],
    "Colorido global": ['Colorido_global1', 'Colorido_global2', 'Colorido_global3', 'Colorido_global4', 'Colorido_global5', 'Colorido_global6'],
    "Mechas coloridas": ['Mechas_coloridas1', 'Mechas_coloridas2', 'Mechas_coloridas3', 'Mechas_coloridas4', 'Mechas_coloridas5', 'Mechas_coloridas6'],
    "Mechas localizadas": ['Mechas_localizadas1', 'Mechas_localizadas2', 'Mechas_localizadas3', 'Mechas_localizadas4', 'Mechas_localizadas5', 'Mechas_localizadas6'],
    "Tattoo Hair": ['Tattoo_Hair1', 'Tattoo_Hair2', 'Tattoo_Hair3', 'Tattoo_Hair4', 'Tattoo_Hair5', 'Tattoo_Hair6'],
    "Mechas loiras": ['Mechas_loiras1', 'Mechas_loiras2', 'Mechas_loiras3', 'Mechas_loiras4', 'Mechas_loiras5', 'Mechas_loiras6'],
    "Morena iluminada": ['Morena_iluminada1', 'Morena_iluminada2', 'Morena_iluminada3', 'Morena_iluminada4', 'Morena_iluminada5', 'Morena_iluminada6'],
    "Coloração e retoque de raiz": ['Coloracao_retoque_raiz1', 'Coloracao_retoque_raiz2', 'Coloracao_retoque_raiz3', 'Coloracao_retoque_raiz4', 'Coloracao_retoque_raiz5', 'Coloracao_retoque_raiz6'],
    "Tonalização e matização": ['Tonalizacao_matizacao1', 'Tonalizacao_matizacao2', 'Tonalizacao_matizacao3', 'Tonalizacao_matizacao4', 'Tonalizacao_matizacao5', 'Tonalizacao_matizacao6'],
    "Ruivos": ['Ruivos1', 'Ruivos2', 'Ruivos3', 'Ruivos4', 'Ruivos5', 'Ruivos6'],
    "Progressiva e botox": ['Progressiva_botox1', 'Progressiva_botox2', 'Progressiva_botox3', 'Progressiva_botox4', 'Progressiva_botox5', 'Progressiva_botox6'],
    "Sobrancelha": ['Sobrancelha1', 'Sobrancelha2', 'Sobrancelha3', 'Sobrancelha4', 'Sobrancelha5', 'Sobrancelha6'],
    "Penteados": ['Penteados1', 'Penteados2', 'Penteados3', 'Penteados4', 'Penteados5', 'Penteados6']
};

export default function GalleryPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
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

    const openModal = (imageName) => {
        setModalImage(imageName);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
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
                </article>
            )) : selectedCategories.map(category => (
                <article key={category.value} className="w-full max-w-5xl p-5 text-lg relative z-20 flex flex-col items-center justify-center">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase text-center">{category.label}</h4>
                    <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
                        {galleryImages[category.value].map((imageName) => (
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
                        <p className="text-lg text-black mt-2">{modalImage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}