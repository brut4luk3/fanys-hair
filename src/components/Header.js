import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex items-center justify-between w-full bg-[#FF7E95] px-5 h-[130px] border-double border-[#C24F64] border-b-[20px]">
            <button onClick={toggleMenu} className={`md:hidden ${isMenuOpen ? 'absolute left-4 z-30' : ''}`}>
                <img src="/assets/hamburger-icon.svg" alt="Menu" className="h-8 w-8" />
            </button>
            <h1 className={`uppercase text-4xl md:text-5xl transition-transform duration-300 ${isMenuOpen ? '-translate-x-64' : ''}`}>Fany's Hair</h1>
            <div className={`fixed top-0 right-0 w-64 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#FF7E95] h-full transition-transform duration-300 shadow-lg z-20 md:relative md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:shadow-none`}>
                <ul className="flex flex-col md:flex-row md:items-center md:justify-start md:text-2xl text-white pt-5 md:pt-0 md:space-x-5">
                    <li><a href="#" className="hover:text-gray-400 block w-full text-center md:text-left border-b md:border-none border-white p-3 md:p-0">Início</a></li>
                    <li><a href="#" className="hover:text-gray-400 block w-full text-center md:text-left border-b md:border-none border-white p-3 md:p-0">Serviços</a></li>
                    <li><a href="#" className="hover:text-gray-400 block w-full text-center md:text-left border-b md:border-none border-white p-3 md:p-0">Certificações</a></li>
                    <li><a href="#" className="hover:text-gray-400 block w-full text-center md:text-left border-b md:border-none border-white p-3 md:p-0">Tabela de preços</a></li>
                    <li><a href="#" className="hover:text-gray-400 block w-full text-center md:text-left border-b md:border-none border-white p-3 md:p-0">Galeria</a></li>
                    <li><a href="#" className="hover:text-gray-400 block w-full text-center md:text-left p-3 md:p-0 md:pr-5">Contato</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;