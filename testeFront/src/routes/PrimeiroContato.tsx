import React from "react";
import { Link } from "react-router-dom";

const PrimeiroContato: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <section className="max-w-2xl mx-6 p-10 bg-white rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Primeiro Contato com o Hospital das Clínicas
        </h1>
        
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Verificamos que você ainda não possuia um cadastro conosco. Seja muito bem-vindo ao Hospital das Clínicas!
        </p>
        
        <p className="mb-8 text-lg text-gray-700 leading-relaxed">
          Para começar sua jornada de cuidado conosco, vá até a nossa área de contato
        </p>
        
        <div className="flex flex-col text-center items-center gap-4 mb-12">
   
          <Link
            to="/contato"
            className="bg-[#005b96] py-4 px-4 text-lg text-white w-2/3 rounded-xl no-underline"
          >
            Fale conosco
          </Link>
          
          
          <Link
            to="/"
            className="bg-[#00a1e0] py-4 px-4 text-lg text-white w-2/3 rounded-xl no-underline"
          >
            Retornar à Página Inicial
          </Link>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-8">
            Etapas para se tornar nosso paciente:
          </h2>
          
          <ol className="text-left inline-block mx-auto space-y-4 pl-6">
            <li className="text-gray-700 text-lg">
              Compareça ao hospital com seus documentos pessoais
            </li>
            <li className="text-gray-700 text-lg">
              Finalize seu cadastro presencialmente na recepção
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
};

export default PrimeiroContato;