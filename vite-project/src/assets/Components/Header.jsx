import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="bg-gray-400 text-xl text-white p-8 cursor-pointer">
                <nav>
                    <ul className="flex flex-col items-center justify-center gap-4 sm:gap-8 sm:flex-row sm:gap-16">
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/projetos">Projetos</Link>
                        </li>
                        <li>
                            <Link to="/apresentacao">Apresentação pessoal</Link>
                        </li>
                        <li>
                            <Link to="/formulario">Formulário de contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
