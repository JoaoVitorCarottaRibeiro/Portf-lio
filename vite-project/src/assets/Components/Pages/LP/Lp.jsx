export default function LP() {
    return (
        <>
            <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 animate-gradient-x min-h-screen flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 px-4">
                    <img
                        className="w-48 h-48 md:w-72 md:h-72 rounded-full border-2 mb-6 md:mb-0"
                        src="/Images/Foto-pessoal.jpg"
                        alt="foto-pessoal"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-white text-2xl md:text-3xl">João Vitor Carotta Ribeiro</h1>
                        <br />
                        <p className="text-white text-md md:text-lg max-w-xs md:max-w-sm">
                            Bem-vindo(a) ao meu portfólio! Aqui você encontrará algumas informações pessoais,
                            informações profissionais, projetos e um formulário de contato para minhas principais
                            redes sociais.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-10">
                    <a
                        href="\files\Currículo - João Vitor Carotta Ribeiro.pdf"
                        download
                        className="text-white bg-gray-900 p-4 rounded-xl flex items-center"
                    >
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="8 12 12 16 16 12"></polyline>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                        </svg>
                        <span className="text-md">Download CV</span>
                    </a>
                </div>
            </div>
        </>
    );
}
