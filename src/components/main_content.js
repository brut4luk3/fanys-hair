/** @jsxImportSource react */
"use client";
import React, { useState, useRef } from 'react';
import ScrollArrow from './ScrollArrow';
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
        <div className="h-[600px] bg-parallax bg-cover bg-fixed"></div>
        <ScrollArrow onClick={scrollToArticle} />
      </section>
      <article ref={articleRef} className="w-full max-w-4xl p-5 text-lg relative z-20 flex border-solid border-[#C24F64] border-b-[3px]">
        <div className="flex-1 my-10">
          <h1 className="text-5xl uppercase my-4">Essa sou eu...</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/assets/fany.png"
            alt="Foto de Fany"
            width={400}
            height={400}
            objectFit="contain"
            className="rotate-6"
          />
        </div>
      </article>

      <article className="w-full max-w-5xl p-5 text-lg my-10 relative z-20 flex flex-col items-center justify-center border-solid border-[#C24F64] border-b-[3px]">
        <h1 className="text-3xl font-bold uppercase my-10 text-center">Veja algumas das minhas obras de arte</h1>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {['colorido1', 'colorido2', 'degrade', 'tigresa', 'cacheado', 'metalico'].map((imageName) => (
            <div key={imageName} className="w-1/4 p-1 hover:scale-105 transition-transform relative cursor-pointer" onClick={() => openModal(imageName)} onMouseOver={() => { }} onMouseOut={() => { }}>
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

        <div className="flex space-x-20 mt-10 my-20">
          <button className="bg-[#333] text-white px-6 p-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
            Me chama
          </button>
          <button className="bg-[#333] text-white px-6 p-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
            Agende
          </button>
          <button className="bg-[#333] text-white px-6 p-3 w-44 h-34 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300">
            Me siga
          </button>
        </div>
      </article>

      <article className="w-full max-w-5xl p-5 text-lg my-5 relative z-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold uppercase my-10 text-center">Depoimentos das minhas clientes</h1>
        <div className="bg-[#E5E6E6] p-5 rounded shadow flex justify-between items-center w-full mb-10 hover:scale-105 transition duration-300">
          <div className="flex w-full justify-start items-center">
            <Image
              src="/assets/girl1.png"
              alt="Depoimento 1"
              width={100}
              height={100}
              layout="fixed"
              objectFit="cover"
              className="rounded-full"
            />
            <p className="ml-4 italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium interdum."
            </p>
          </div>
        </div>
        <div className="bg-[#E5E6E6] p-5 rounded shadow flex justify-between items-center w-full mb-10 hover:scale-105 transition duration-300">
          <div className="flex w-full justify-start items-center">
            <Image
              src="/assets/girl2.png"
              alt="Depoimento 2"
              width={100}
              height={100}
              layout="fixed"
              objectFit="cover"
              className="rounded-full"
            />
            <p className="ml-4 italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium interdum."
            </p>
          </div>
        </div>
        <div className="bg-[#E5E6E6] p-5 rounded shadow flex justify-between items-center w-full mb-10 hover:scale-105 transition duration-300">
          <div className="flex w-full justify-start items-center">
            <Image
              src="/assets/girl3.png"
              alt="Depoimento 3"
              width={100}
              height={100}
              layout="fixed"
              objectFit="cover"
              className="rounded-full"
            />
            <p className="ml-4 italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium interdum."
            </p>
          </div>
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
        <div className="h-[800px] bg-parallax-polaroid bg-cover bg-fixed mb-50"></div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-5 z-50" onClick={closeModal}>
          <div className="relative p-5 rounded-lg shadow-lg text-center bg-white mx-auto max-w-3xl max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <Image
              src={`/assets/${modalImage}.png`}
              alt={`Obra de arte ${modalImage}`}
              width={380}
              height={600}
              objectFit="contain"
              className="max-h-[70vh] max-w-[90vw]"
              quality={100}
            />
            <p className="text-lg text-black mt-2">Descrição da imagem {modalImage}</p>
          </div>
        </div>
      )}
    </div>
  );
}