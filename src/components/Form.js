/** @jsxImportSource react */
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

registerLocale('pt-BR', ptBR);

const Form = () => {
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

  const handleSelectService = (services) => {
    setSelectedService(services);
  };

  return (
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
  );
};

export default Form;