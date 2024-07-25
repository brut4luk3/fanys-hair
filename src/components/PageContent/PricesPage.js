/** @jsxImportSource react */
"use client";
import React, { useState, useRef, useEffect } from 'react';
import ScrollArrow from '@/components/ScrollArrow';
import Form from '@/components/Form';
import { useRouter } from 'next/router';

export default function PricesPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const articleRef = useRef(null);
    const formRef = useRef(null);
    const router = useRouter();

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

    const handleCategoryClick = (category) => {
        router.push({
            pathname: '/galeria',
            query: { category, scrollToImages: true }
        });
    };

    return (
        <div className="flex flex-col items-center bg-white">
            <section className="relative w-full overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center h-[500px] md:h-[600px]">
                        <div className="loader" />
                    </div>
                ) : (
                    <div className="h-[500px] md:h-[600px] md:bg-parallax-prices bg-parallax-prices-mobile md:bg-cover bg-center bg-fixed"></div>
                )}
                <ScrollArrow onClick={scrollToArticle} />
            </section>
            <article ref={articleRef} className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-20 border-solid border-[#C24F64] border-b-[3px]">
                <div className="flex flex-col sm:flex-row items-center my-10">
                    <div className="sm:flex-1 sm:pr-5 mb-10">
                        <h3 className="text-3xl sm:text-4xl uppercase mb-4">Invista em ser VOCÊ!</h3>
                        <p className='italic'>
                            "Pouco importa o julgamento dos outros. Os seres são tão contraditórios que é impossível atender às suas demandas, satisfazê-los. Tenha em mente simplesmente ser <span className='font-bold'>autêntico</span> e <span className='font-bold'>verdadeiro</span>."
                        </p>
                        <p className='font-bold'>
                            Dalai Lama
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center my-10'>
                    <h4 className='text-2xl md:text-2xl font-bold uppercase text-center'>
                        "Não existe uma cor de cabelo bonita se o cabelo não está saúdavel"
                    </h4>
                </div>

                <div className="flex flex-col sm:flex-row items-center my-10">
                    <div className="sm:flex-1 sm:pr-5">
                        <p>
                            Aqui a prioridade é sempre a saúde do seu fio aliado ao seu desejo, portanto sempre marcamos inicialmente um teste de mecha para avaliar as condições do fio, altura de tom que podemos chegar e as cores que podemos fazer.
                        </p>
                        <br />
                        <p>
                            No dia do procedimento conversaremos sobre todos os cuidados que você pode ter em casa para cuidar melhor do seu cabelo, tratamentos, finalização e duração maior da cor.
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center my-10'>
                    <h5 className='text-2xl md:text-2xl font-bold uppercase text-center'>
                        Lembre-se: O cabelo ideal para o seu rosto é aquele que te faz sentir <span className='font-bold'>poderosa!</span>
                    </h5>
                </div>

                <div className='flex flex-col items-center my-10'>
                    <h5 className="text-2xl md:text-2xl font-bold uppercase text-center mb-10">Valores Fixos</h5>
                    <h6 className="text-lg font-bold uppercase text-center mb-5">
                        Quando você vem cortar o cabelo comigo você recebe muito mais que <span className='italic'>"só um corte"</span>:
                    </h6>
                    <ul className="list-disc list-inside text-lg">
                        <li>Análise de opções</li>
                        <li>Corte</li>
                        <li>Lavagem com shampoo reconstrutor</li>
                        <li>Finalização natural</li>
                        <li>Consultoria de produtos</li>
                        <li>Consultoria de estilização/finalização</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center my-10">
                    <div className="sm:flex-1 sm:pr-5">
                        <p className="font-bold uppercase">Corte</p>
                        <div className="flex justify-between items-center w-full py-1 text-lg">
                            <span className="flex-shrink-0">Corte de cabelo</span>
                            <span className="flex-grow border-b-[3px] border-[#C24F64] border-dotted mx-2"></span>
                            <span className="flex-shrink-0">R$ 100</span>
                        </div>
                        <div className="flex justify-between items-center w-full py-1 text-lg">
                            <span className="flex-shrink-0">Manutenção (até 45 dias)</span>
                            <span className="flex-grow border-b-[3px] border-[#C24F64] border-dotted mx-2"></span>
                            <span className="flex-shrink-0">R$ 80</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center my-10">
                    <div className="sm:flex-1 sm:pr-5">
                        <p className="font-bold uppercase">Tratamento</p>
                        <div className="flex justify-between items-center w-full py-1 text-lg">
                            <span className="flex-shrink-0">Ritual Reconstrutor</span>
                            <span className="flex-grow border-b-[3px] border-[#C24F64] border-dotted mx-2"></span>
                            <span className="flex-shrink-0">R$ 150</span>
                        </div>
                        <div className="flex justify-between items-center w-full py-1 text-lg">
                            <span className="flex-shrink-0">Acidificação</span>
                            <span className="flex-grow border-b-[3px] border-[#C24F64] border-dotted mx-2"></span>
                            <span className="flex-shrink-0">R$ 100</span>
                        </div>
                        <div className="flex justify-between items-center w-full py-1 text-lg">
                            <span className="flex-shrink-0">Pacote de 4 tratamentos</span>
                            <span className="flex-grow border-b-[3px] border-[#C24F64] border-dotted mx-2"></span>
                            <span className="flex-shrink-0">R$ 400</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center my-10'>
                    <h6 className="text-xl font-bold uppercase text-cente">
                        *Todos os tratamentos incluem avaliação do fio e finalização inclusa*
                    </h6>
                </div>
            </article>

            <article className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-20">
                <div className='flex flex-col items-center my-10'>
                    <h6 className="text-2xl md:text-3xl font-bold uppercase text-center my-5">
                        Quer ver mais alguns dos meus serviços?
                    </h6>
                    <p className='text-sm mb-4'>Clique no item desejado para visualizá-lo na galeria:</p>
                    <div className="flex flex-wrap justify-center text-center mb-20">
                        {[
                            "Cortes exóticos",
                            "Colorido global",
                            "Mechas coloridas",
                            "Mechas localizadas",
                            "Tattoo Hair",
                            "Mechas loiras",
                            "Morena iluminada",
                            "Coloração e retoque de raiz",
                            "Tonalização e matização",
                            "Ruivos",
                            "Progressiva e botox",
                            "Sobrancelha",
                            "Penteados"
                        ].map((item, index) => (
                            <React.Fragment key={index}>
                                <button
                                    className="text-current focus:outline-none hover:underline"
                                    onClick={() => handleCategoryClick(item)}
                                >
                                    {item}
                                </button>
                                {index < 12 && (
                                    <span className="mx-2 text-current">•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <h6 className="text-lg font-bold uppercase text-center my-5">
                        E aí? Vamos agendar?
                    </h6>
                    <button onClick={scrollToForm} className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300 mb-20">
                        Agende agora
                    </button>
                </div>
            </article>

            <article ref={formRef} className="w-full max-w-5xl p-5 text-lg my-10 relative z-20 flex flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center my-10">
                    <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
                    <span className="flex-shrink mx-4">
                        <h1 className="text-3xl font-bold uppercase">Não perca tempo!</h1>
                    </span>
                    <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
                </div>

                <Form />
            </article>
        </div>
    );
}