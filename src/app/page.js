import MainContent from "../components/main_content";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-between items-center w-full bg-[#FF7E95] h-[150px] px-5 border-double border-[#C24F64] border-b-[20px]">
      <h1 className="text-5xl uppercase">Fany's Hair</h1>
        <nav>
          <ul className="flex space-x-4 text-2xl text-white">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Serviços</a></li>
            <li><a href="#" className="hover:text-gray-400">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <MainContent />
      </main>
    </div>
  );
}