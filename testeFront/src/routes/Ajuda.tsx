
import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { passosAjuda, recursosAjuda } from "../data/ajudaData";

const Ajuda: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <main className="flex-grow py-12">
        <section className="text-center mb-12 px-[10%]">
          <h1 className="text-4xl md:text-5xl font-extrabold ">
           Portal de Telemedicina do Hospital das Clínicas
          </h1>
          <p className="mt-4 text-lg ">
            Guia completo para acesso aos serviços de Teleconsulta e recursos digitais
          </p>
        </section>

        <section className="mb-24">
          <div className="px-[10%]">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-300">
              <h2 className="text-2xl font-bold text-[#005b96] mb-8 text-center">
                Como Funciona
              </h2>

              <div className="flex flex-col gap-6">
                {passosAjuda.map((passo) => (
                  <div
                    key={passo.numero}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#005b96] text-[#005b96] font-bold text-lg bg-white">
                      {passo.numero}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#005b96]">
                        {passo.titulo}
                      </h3>
                      <p className="text-gray-600">{passo.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-[10%]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {recursosAjuda.map((recurso, i) => (
              <div
                key={i}
                className="bg-white border border-gray-300 rounded-xl shadow p-6 flex flex-col items-center text-center gap-4"
              >
                <HiOutlineCamera size={48} className="text-[#005b96]" />
                <h3 className="text-xl font-semibold text-[#005b96]">
                  {recurso.titulo}
                </h3>
                <p className="text-gray-600">{recurso.texto}</p>
                <a
                  href={recurso.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#008ecc] py-[0.6rem] px-[0.8rem] text-[1rem] text-white w-[10rem] rounded-[1rem] transition hover:opacity-90 mt-2 no-underline"
                >
                  Assistir
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ajuda;
