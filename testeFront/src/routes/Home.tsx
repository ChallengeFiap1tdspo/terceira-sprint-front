import ImagemIdosoNaTeleConsulta from "../img/ImagemIdosoNaTeleConsulta.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#f8f9fa] h-[100vh] items-center justify-center">
      <div className="flex items-center justify-center w-[80%]">
        <section>
          <div>
            <h1 className="text-[#005b96]">
              Seja bem-vindo à Teleconsulta do Hospital das Clínicas
            </h1>
            <p>
              Estamos aqui para oferecer o suporte que você precisa para <br />
              sua consulta online.
            </p>
          </div>

          <div className="flex flex-col text-center items-center">
            <Link
              to="/login"
              className="no-underline hover:no-underline focus:no-underline active:no-underline visited:no-underline bg-[#005b96] py-[2rem] px-[.8rem] text-[1.2rem] text-[#f8f9fa] w-[60%] rounded-[1rem] cursor-pointer"
            >
              Caso seja nosso paciente clique aqui para obter ajuda
            </Link>

            <br />

            <Link
              to="/cadastro"
              className="no-underline hover:no-underline focus:no-underline active:no-underline visited:no-underline bg-[#00a1e0] py-[2rem] px-[.8rem] text-[1.2rem] text-[#f8f9fa] w-[60%] rounded-[1rem] cursor-pointer"
            >
              Novo paciente? Cadastre-se aqui
            </Link>
          </div>
        </section>

        <section>
          <img
            src={ImagemIdosoNaTeleConsulta}
            alt="Paciente usando tablet para consulta online"
            className="w-full max-w-[700px] rounded-lg shadow-md transition-transform duration-300 ease-in-out md:ml-24 hover:scale-105"
          />
        </section>
      </div>
    </main>
  );
}
