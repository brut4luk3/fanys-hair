/** @jsxImportSource react */
"use client";
import React, { useState, useRef } from 'react';
import ScrollArrow from '../ScrollArrow';
import Image from 'next/image';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

registerLocale('pt-BR', ptBR);

export default function MainContent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const articleRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState([]);

  const servicesOptions = [
    { label: 'Transformação', value: 'transformacao' },
    { label: 'Corte feminino', value: 'corte_feminino' },
    { label: 'Corte masculino', value: 'corte_masculino' },
    { label: 'Tratamento', value: 'tratamento' },
    { label: 'Progressiva', value: 'progressiva' },
    { label: 'Retoque de raiz', value: 'retoque_raiz' },
    { label: 'Mechas', value: 'mechas' },
    { label: 'Tattoo Hair', value: 'tattoo_hair' },
  ];

  const scrollToArticle = () => {
    articleRef.current?.scrollIntoView({ behavior: 'smooth' });
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

  const handleSelectService = (services) => {
    setSelectedService(services);
  };

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full overflow-hidden">
        <div className="h-[500px] md:h-[600px] md:bg-parallax bg-parallax-mobile md:bg-cover bg-center bg-fixed"></div>
        <ScrollArrow onClick={scrollToArticle} />
      </section>
      <article ref={articleRef} className="w-full max-w-4xl p-5 text-base sm:text-lg relative z-20 border-solid border-[#C24F64] border-b-[3px]">
        <div className="flex flex-col sm:flex-row items-center my-10">
          <div className="sm:flex-1 sm:pr-5 mb-10">
            <h1 className="text-4xl sm:text-5xl uppercase mb-4">Essa sou eu...</h1>
            <p>
              Com mais de 04 anos de formação e ampla experiência, lhe ofereço a experiência de "fui fazer o cabelo na casa da minha amiga", podendo lhe garantir um atendimento personalizado e memorável!
            </p>
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
        <div className="flex justify-center items-center flex-wrap gap-4">
          {['Rainbow Hair', 'Mexas coloridas', 'Degradê', 'Tattoo Hair', 'Cacheado colorido', 'Colorido metálico'].map((imageName) => (
            <div key={imageName} className="w-1/3 sm:w-1/4 p-1 hover:scale-105 transition-transform relative cursor-pointer" onClick={() => openModal(imageName)} onMouseOver={() => { }} onMouseOut={() => { }}>
              <Image
                src={`/assets/${imageName}.png`}
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

        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-20 mt-10 my-20">
          <button className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
            Me chama
          </button>
          <button className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
            Agende
          </button>
          <button className="bg-[#333] text-white px-6 py-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
            Me siga
          </button>
        </div>
      </article>

      <article className="w-full max-w-5xl p-5 text-lg my-5 relative z-20 flex flex-col items-center justify-center">
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
            "Nunca que uma cabeleireira acertou tanto como a Fany! Ela é uma verdadeira Fada das Cores!"
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

      <article className="w-full max-w-5xl p-5 text-lg my-10 relative z-20 flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center my-10">
          <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
          <span className="flex-shrink mx-4">
            <h1 className="text-3xl font-bold uppercase">Venha colorir a sua vida!</h1>
          </span>
          <div className="flex-grow border-t-2 border-solid border-[#C24F64]"></div>
        </div>

        <form className="bg-[#E5E6E6] p-5 rounded shadow flex flex-col items-center p-5 w-full max-w-xl mx-auto">
          <h3 className='text-xl font-semibold mb-5'>Preencha os dados abaixo para o agendamento:</h3>
          <div className="flex my-2 w-full">
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              dateFormat="dd/MM/yyyy HH:mm"
              locale="pt-BR"
              className="datepicker form-input rounded p-1 w-full"
            />
          </div>
          <div className="flex my-2 w-full">
            <Select
              options={servicesOptions}
              isMulti
              closeMenuOnSelect={false}
              onChange={handleSelectService}
              placeholder="Adicione serviços"
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full my-2 mb-20 space-y-2">
            <input type="text" placeholder="Nome completo" className="form-input p-1 rounded w-full" />
            <input type="text" placeholder="Telefone" className="form-input p-1 rounded w-full" />
            <textarea placeholder="Perguntas adicionais" className="form-input p-1 rounded h-[150px] w-full" />
          </div>
          <button type="submit" className="bg-[#333] text-white px-6 py-3 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300 w-full">
            Enviar proposta de agendamento
          </button>
        </form>
      </article>

      <section className="relative w-full overflow-hidden">
        <div className="h-[700px] md:h-[800px] bg-parallax-polaroid-mobile bg-center md:bg-parallax-polaroid bg-cover bg-fixed mb-50"></div>
      </section>

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