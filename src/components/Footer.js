import React, { useState } from 'react';
import Image from 'next/image';

function Footer() {
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalContent(null);
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const links = [
        { 
            text: 'Política de Cancelamento', 
            content: (
                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4">Política de Cancelamento</h2>
                    <p className="mb-4">Entendemos que imprevistos acontecem e que você pode precisar cancelar seu atendimento. Para garantir um bom atendimento a todos os nossos clientes, pedimos que o cancelamento seja feito com pelo menos 1 dia de antecedência.</p>
                    <p className="mb-4">Caso o cancelamento não seja efetuado dentro deste prazo, poderá ser cobrada uma taxa de cancelamento. Agradecemos sua compreensão e colaboração.</p>
                    <p className="mb-4">Para cancelar seu atendimento, entre em contato conosco pelo telefone +55 (47) 99262-2813 ou pelo nosso Instagram @fanys_hair.</p>
                    <p>Agradecemos pela sua compreensão e estamos à disposição para qualquer dúvida.</p>
                </div>
            ) 
        },
        { 
            text: 'Informações sobre Privacidade', 
            content: (
                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4">Informações sobre Privacidade</h2>
                    <p className="mb-4">Respeitamos a sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta política descreve como coletamos, usamos e protegemos suas informações.</p>
                    <p className="mb-4">Podemos coletar informações pessoais, como seu nome, endereço de e-mail e telefone, quando você agenda um atendimento ou entra em contato conosco. Essas informações são usadas exclusivamente para fornecer nossos serviços e comunicar com você.</p>
                    <p className="mb-4">Além disso, podemos tirar fotos dos nossos trabalhos, incluindo seu cabelo, para exibir em nossas redes sociais e materiais promocionais. Garantimos que qualquer imagem será usada com total respeito e de acordo com a sua autorização.</p>
                    <p className="mb-4">Se você tiver qualquer dúvida ou preocupação sobre a privacidade de suas informações, por favor, entre em contato conosco pelo e-mail <a href="mailto:sbukovitz@outlook.com" className="text-blue-500 underline">sbukovitz@outlook.com</a>.</p>
                </div>
            ) 
        },
        { 
            text: 'Política de Cookies', 
            content: (
                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4">Política de Cookies</h2>
                    <h3 className="text-xl font-semibold mb-2">O que são cookies?</h3>
                    <p className="mb-4">Cookies são pequenos arquivos de texto que são colocados no seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles são amplamente usados para fazer os sites funcionarem de maneira mais eficiente, bem como para fornecer informações aos proprietários do site.</p>
                    
                    <h3 className="text-xl font-semibold mb-2">Como usamos os cookies?</h3>
                    <p className="mb-4">Utilizamos cookies para vários fins, incluindo:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Essenciais:</strong> Alguns cookies são essenciais para que você possa experimentar todas as funcionalidades do nosso site. Eles permitem manter sessões de usuários e prevenir ameaças à segurança. Eles não coletam ou armazenam qualquer informação pessoal.</li>
                        <li><strong>Desempenho:</strong> Esses cookies coletam informações sobre como os visitantes usam o site, como quais páginas são mais visitadas ou se recebem mensagens de erro em páginas web. Essas informações são usadas para melhorar o funcionamento do site.</li>
                        <li><strong>Funcionalidade:</strong> Esses cookies permitem que o site se lembre das escolhas que você faz (como seu nome de usuário, idioma ou a região em que você está) e forneça recursos aprimorados e mais pessoais.</li>
                        <li><strong>Publicidade:</strong> Esses cookies são usados para fornecer anúncios mais relevantes para você e seus interesses. Eles também são usados para limitar o número de vezes que você vê um anúncio e ajudar a medir a eficácia da campanha publicitária.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Que tipos de cookies usamos?</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Cookies de sessão:</strong> São cookies temporários que permanecem no seu dispositivo até que você saia do site.</li>
                        <li><strong>Cookies persistentes:</strong> São cookies que permanecem no seu dispositivo por um período definido ou até que você os exclua manualmente.</li>
                        <li><strong>Cookies de terceiros:</strong> Esses cookies são colocados por terceiros e são usados para rastrear você através de diferentes sites para fornecer anúncios personalizados.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Como você pode controlar os cookies?</h3>
                    <p className="mb-4">Você pode controlar e/ou excluir cookies como desejar. Você pode excluir todos os cookies que já estão no seu dispositivo e configurar a maioria dos navegadores para impedir que eles sejam colocados. No entanto, se você fizer isso, pode ser que tenha que ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar corretamente.</p>

                    <h3 className="text-xl font-semibold mb-2">Mudanças na nossa política de cookies</h3>
                    <p className="mb-4">Podemos atualizar esta Política de Cookies ocasionalmente para refletir mudanças em nossas práticas ou por outras razões operacionais, legais ou regulamentares. Recomendamos que você reveja esta página periodicamente para obter as informações mais recentes sobre nossa política de cookies.</p>

                    <h3 className="text-xl font-semibold mb-2">Contato</h3>
                    <p>Se você tiver alguma dúvida sobre nossa Política de Cookies, entre em contato conosco através do e-mail: <a href="mailto:sbukovitz@outlook.com" className="text-blue-500 underline">sbukovitz@outlook.com</a>.</p>
                </div>
            )
        },
        { 
            text: 'Preparação para atendimento', 
            content: (
                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4">Preparação para Atendimento</h2>
                    <p className="mb-4">Para garantir que você tenha a melhor experiência possível durante o seu atendimento, aqui estão algumas dicas de preparação:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Lave seu cabelo:</strong> Lavar o cabelo na noite anterior ou na manhã do atendimento garante que o profissional possa trabalhar com fios limpos, facilitando cortes e tratamentos.</li>
                        <li><strong>Evite produtos:</strong> Não use produtos como gel, mousse ou spray fixador no dia do atendimento, a menos que seja solicitado pelo profissional.</li>
                        <li><strong>Traga referências:</strong> Se você tem uma ideia específica de corte, cor ou estilo, traga fotos de referência. Isso ajuda o profissional a entender exatamente o que você deseja.</li>
                        <li><strong>Chegue a tempo:</strong> Planeje-se para chegar com alguns minutos de antecedência. Isso garante que você tenha tempo para se acomodar e discutir detalhes do atendimento com calma.</li>
                        <li><strong>Cuide da saúde do seu cabelo:</strong> Hidrate e cuide bem do seu cabelo nas semanas que antecedem tratamentos químicos ou mudanças de cor para garantir melhores resultados.</li>
                        <li><strong>Comunique-se:</strong> Não hesite em comunicar qualquer preocupação ou dúvida que você tenha antes ou durante o atendimento. A comunicação é essencial para alcançar o resultado desejado.</li>
                    </ul>
                    <p className="mb-4">Seguindo essas dicas, você ajuda a garantir que seu atendimento seja o mais eficiente e agradável possível. Estamos ansiosos para vê-lo e proporcionar uma experiência incrível!</p>
                </div>
            ) 
        }
    ];

    return (
        <footer className="bg-[#111111] text-white py-5 flex flex-col items-center">
            <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-10 space-y-4 sm:space-y-0 my-10 w-full px-5">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-gray-500 hover:text-gray-600"
                        onClick={(e) => {
                            e.preventDefault();
                            openModal(link.content);
                        }}
                    >
                        {link.text}
                    </a>
                ))}
            </div>
            <div className="flex justify-center space-x-4 mt-10 px-5">
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
            <div className="text-center mt-10 px-5">
                <p>FANY'S HAIR</p>
            </div>
            <div className="text-center mb-20 px-5">
                <p>Rua Bagé, 512, Velha Central / +55 (47) 99262-2813 / @fanys_hair</p>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-5 z-50" onClick={closeModal}>
                    <div className="relative p-5 rounded-lg shadow-lg text-center bg-white text-black mx-auto max-w-3xl max-h-[80vh] overflow-auto" onClick={e => e.stopPropagation()}>
                        <div className="text-center">
                            {modalContent}
                            <button onClick={closeModal} className="mt-5 bg-[#333] text-white px-6 py-2 rounded shadow hover:bg-[#545454] transition duration-300">
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;