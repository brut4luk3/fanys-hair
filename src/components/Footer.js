import Image from 'next/image';

function Footer() {
    return (
        <footer className="bg-[#111111] text-white py-5 flex flex-col items-center">
            <div className="w-[900px] flex justify-center space-x-10 my-10">
                <a href="#" className="text-gray-500 hover:text-gray-600">Política de Reembolso</a>
                <a href="#" className="text-gray-500 hover:text-gray-600">Informações sobre Privacidade</a>
                <a href="#" className="text-gray-500 hover:text-gray-600">Política de Cookies</a>
                <a href="#" className="text-gray-500 hover:text-gray-600">Preparação para atendimento</a>
            </div>
            <div className="w-600px flex justify-center space-x-4 mt-10">
                <a href="https://open.spotify.com/playlist/0scgwRXth0jf1XZqHTR8F0?si=PqbxDEibSLiidvY2vgfn2A&pi=u-K-hj-ydiSRum" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/spotify.png" alt="Spotify" width={24} height={24} />
                </a>
                <a href="https://www.instagram.com/fanys_hair" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/instagram.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5547996762813" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/whatsapp.png" alt="WhatsApp" width={24} height={24} />
                </a>
            </div>
            <div className="w-600px text-center mt-10">
                <p>FANY'S HAIR</p>
            </div>
            <div className="w-600px text-center mb-20">
                <p>Rua Bagé, 512, Velha Central / +55 (47) 99262-2813 / @fanys_hair</p>
            </div>
        </footer>
    );
}

export default Footer;