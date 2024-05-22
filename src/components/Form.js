/** @jsxImportSource react */
import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

registerLocale('pt-BR', ptBR);

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalQuestions, setAdditionalQuestions] = useState('');
  const [message, setMessage] = useState('');

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

  const generateMessage = () => {
    const selectedServices = selectedService.map(service => service.label).join(', ');
    const date = selectedDate.toLocaleDateString('pt-BR');
    const time = selectedDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    const message = `Olá, sou *${name}*, tudo bem?\n\nVim pelo site e gostaria de agendar os seguintes serviços:\n\n*${selectedServices}*\n\nDia: *${date}*\nHorário: *${time}*\n\n${
      additionalQuestions ? `Além disso, tenho as seguintes dúvidas:\n*${additionalQuestions}*` : ''
    }`;

    setMessage(message);
  };

  useEffect(() => {
    generateMessage();
  }, [name, phone, selectedDate, selectedService, additionalQuestions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && selectedDate && selectedService.length > 0) {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5547996762813&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#E5E6E6] p-5 rounded shadow flex flex-col items-center p-5 w-full max-w-xl mx-auto">
      <h3 className='text-xl font-semibold mb-5'>Preencha os dados abaixo para o agendamento:</h3>
      <div className="flex my-2 w-full">
        <p>Escolha uma data e hora para o agendamento:</p>
      </div>
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
        <input 
          type="text" 
          placeholder="Nome completo" 
          className="form-input p-1 rounded w-full"
          value={name}
          onChange={e => setName(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Telefone" 
          className="form-input p-1 rounded w-full"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required 
        />
        <textarea 
          placeholder="Perguntas adicionais" 
          className="form-input p-1 rounded h-[150px] w-full"
          value={additionalQuestions}
          onChange={e => setAdditionalQuestions(e.target.value)}
        />
      </div>
      <button 
        type="submit" 
        className="bg-[#333] text-white px-6 py-3 rounded shadow hover:bg-[#545454] hover:scale-105 transition duration-300 w-full"
      >
        Enviar proposta de agendamento
      </button>
    </form>
  );
};

export default Form;