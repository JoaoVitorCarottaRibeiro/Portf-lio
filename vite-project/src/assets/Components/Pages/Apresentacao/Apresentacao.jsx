export default function Apresentacao() {
    return (
        <>
            <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 animate-gradient-x min-h-screen">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-white text-3xl py-10">Apresentação pessoal</h1>
                    {/* Ajuste de largura e margem para telas menores */}
                    <p className="sm:w-3/4 md:w-1/3 text-white text-lg mx-6 text-center">
                        Me chamo João Vitor Carotta Ribeiro, tenho 18 anos, estou cursando o 2° semestre de Engenharia de Software na FIAP. Atualmente tenho mais contato com o front-end pelo primeiro ano da faculdade ser focado no mesmo. Porém tenho experiência em projetos realizados na parte do back-end, principalmente com Python e C++, utilizando Arduino UNO R3 e ESP32. Ainda não possuo experiência profissional, porém, já controlei finanças de vendas de brigadeiros e tenho um breve conhecimento em marketing digital. Meu ponto forte é a comunicação, tenho muita facilidade de me expressar e comunicar com as pessoas. Outro ponto forte que tenho é a iniciativa para realização de projetos e tarefas. Um ponto a desenvolver, é o meu nervosismo em algumas ocasiões, por exemplo, uma prova.
                    </p>
                    {/* Ajuste de largura e margem para telas menores */}
                    <p className="sm:w-3/4 md:w-1/3 text-white text-lg mx-6 text-center">
                        Falando um pouco fora do ramo profissional, gosto de futebol, basquete, ouvir música, tocar pandeiro, assistir filmes, séries e desenhar.
                    </p>
                </div>
                <h1 className="text-white text-3xl py-10 flex items-center justify-center">Habilidades</h1>
                
                <div className="text-black text-3xl border w-4/5 mx-auto p-14 bg-gray-200 flex items-center flex-col md:flex-row gap-4">
                    <p className="mb-4 md:mb-0 md:mr-32">Front-End</p>
                    <img src="/Images/html-icon.png" alt="html icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/css-icon.png" alt="css icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/js-icon.png" alt="js icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/react-icon.png" alt="react icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/figma-icon.png" alt="figma icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/tailwind-icon.png" alt="tailwind icon" className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                
                <div className="text-black text-3xl border w-4/5 mx-auto p-14 bg-gray-200 flex items-center flex-col md:flex-row mt-10 gap-4">
                    <p className="mb-4 md:mb-0 md:mr-[135px]">Back-End</p>
                    <img src="/Images/python-icon.png" alt="python icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/node-icon.png" alt="node icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/cMM-icon.png" alt="c++ icon" className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                
                <div className="text-black text-3xl border w-4/5 mx-auto p-14 bg-gray-200 flex items-center flex-col md:flex-row mt-10 gap-4">
                    <p className="mb-4 md:mb-0 md:mr-[85px]">Data-Science</p>
                    <img src="/Images/pandas-icon.png" alt="pandas icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/numpy-icon.png" alt="numpy icon" className="w-10 h-10 md:w-12 md:h-12" />
                </div>

                <div className="text-black text-3xl border w-4/5 mx-auto p-14 bg-gray-200 flex items-center flex-col md:flex-row mt-10 gap-4">
                    <p className="mb-4 md:mb-0 md:mr-[153px]">Outros</p>
                    <img src="/Images/git-icon.png" alt="git icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/github-icon.png" alt="github icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/excel-icon.png" alt="excel icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/ppt-icon.png" alt="power point icon" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src="/Images/word-icon.png" alt="word icon" className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <br /><br />
            </div>
        </>
    )
}
