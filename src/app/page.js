import MainContent from "../components/main_content";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center w-full bg-[#FF7E95] h-[130px] px-5 border-double border-[#C24F64] border-b-[20px]">
        <h1 className="text-5xl uppercase">Fany's Hair</h1>
        <nav>
          <ul className="flex space-x-4 text-2xl text-white">
            <li><a href="#" className="hover:text-gray-400">Início</a></li>
            <li><a href="#" className="hover:text-gray-400">Serviços</a></li>
            <li><a href="#" className="hover:text-gray-400">Certificações</a></li>
            <li><a href="#" className="hover:text-gray-400">Tabela de preços</a></li>
            <li><a href="#" className="hover:text-gray-400">Galeria</a></li>
            <li><a href="#" className="hover:text-gray-400">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}