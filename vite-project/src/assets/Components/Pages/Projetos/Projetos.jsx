export default function Projetos() {
    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <>
            <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 animate-gradient-x min-h-screen">
                <section className="py-20 px-4 md:px-10">
                    <div className="interface">
                        <h2 className="flex items-center justify-center text-3xl text-white mb-10">
                            Meus projetos
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                            <div
                                className="relative w-full max-w-[360px] h-[460px] cursor-pointer bg-cover rounded-[40px] transition-all duration-1000 ease-in-out hover:bg-[100%_50%] bg-[100%_0%]"
                                style={{ backgroundImage: "url('Images/airbnb.png')" }}
                                onClick={() => handleRedirect('https://github.com/JoaoVitorCarottaRibeiro/Airbnb-CP-Front-end')}
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-[40px] flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity">
                                    Projeto 1
                                </div>
                            </div>
                            <div
                                className="relative w-full max-w-[360px] h-[460px] cursor-pointer bg-cover rounded-[40px] transition-all duration-1000 ease-in-out hover:bg-[100%_50%] bg-[100%_0%]"
                                style={{ backgroundImage: "url('Images/bettery.png')" }}
                                onClick={() => handleRedirect('https://github.com/JoaoVitorCarottaRibeiro/Webdev-Front-challenge')}
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-[40px] flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity">
                                    Projeto 2
                                </div>
                            </div>
                            <div
                                className="relative w-full max-w-[360px] h-[460px] cursor-pointer bg-cover rounded-[40px] transition-all duration-1000 ease-in-out hover:bg-[100%_50%] bg-[100%_0%]"
                                style={{ backgroundImage: "url('Images/Python.jpg')" }}
                                onClick={() => handleRedirect('https://github.com/JoaoVitorCarottaRibeiro/Python-Challenge')}
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-[40px] flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity">
                                    Projeto 3
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}


