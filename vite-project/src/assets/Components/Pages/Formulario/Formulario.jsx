import { useState } from "react";

export default function Formulario() {
    const [enviado, setEnviado] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);

        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Telefone:", telefone);
        console.log("Mensagem:", mensagem);
    };

    return (
        <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 min-h-screen flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-white text-3xl py-10">Entre em contato</h1>
                <form className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>
                    <input 
                        className="w-80 h-12 rounded-lg border border-black my-5 pl-4" 
                        type="text" 
                        placeholder="Digite seu nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                    <input 
                        className="w-80 h-12 rounded-lg border border-black my-5 pl-4" 
                        type="text" 
                        placeholder="Digite seu e-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        className="w-80 h-12 rounded-lg border border-black my-5 pl-4" 
                        type="number" 
                        placeholder="Digite seu telefone" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        required 
                    />
                    <textarea 
                        className="w-80 h-36 rounded-lg border border-black my-5 pl-4 pt-2 resize-none" 
                        placeholder="Digite sua mensagem" 
                        value={mensagem} 
                        onChange={(e) => setMensagem(e.target.value)} 
                        required
                    ></textarea>
                    <button className="bg-gray-800 p-3 rounded-xl w-36 text-white text-lg mb-10">
                        {enviado ? "Enviado!" : "Enviar"}   
                    </button>
                </form>
            </div>
        </div>
    );
}
