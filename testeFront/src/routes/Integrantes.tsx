import React from "react";
import { integrantes } from "../data/IntegrantesData";
import { LinkedInIcon, GitHubIcon } from "../Components/Icones";

const Integrantes: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#f8f9fa] py-24 px-12 md:px-20 max-w-7xl mx-auto">

      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003d66] mb-8">
          Conheça Nossa Equipe
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Uma equipe dedicada e comprometida com a excelência acadêmica e profissional.
        </p>
      </section>


      <section className="flex flex-row flex-wrap justify-center gap-x-60 gap-y-28 mb-40">
        {integrantes.map((i, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-16 flex flex-col items-center text-center w-72 transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={i.foto}
              alt={`Foto de ${i.nome}`}
              className="w-[160px] h-[160px] rounded-full object-cover border-4 border-[#e8f0fe] mb-10"
              
            />
            <h3 className="text-2xl font-semibold text-[#003d66] mb-6">{i.nome}</h3>
            <p className="text-gray-600 text-base mb-3">{i.rm}</p>
            <p className="text-gray-600 text-base mb-8">{i.turma}</p>

            <div className="flex gap-8 mt-6">
              <a
                href={i.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-md hover:bg-[#005b96] hover:text-white transition"
              >
                <LinkedInIcon size={26} />
              </a>
              <a
                href={i.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-md hover:bg-[#005b96] hover:text-white transition"
              >
                <GitHubIcon size={26} />
              </a>
            </div>
          </article>
        ))}
      </section>

  
    </main>
  );
};

export default Integrantes;
