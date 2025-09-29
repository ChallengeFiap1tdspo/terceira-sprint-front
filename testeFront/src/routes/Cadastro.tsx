import React from "react";
import CadastroForm from "../Components/CadastroForm";

const CadastroPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7ff] via-[#c0e9ff] to-[#005b96] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col items-center mx-[20%]">
          <h2 className="text-[#005b96] text-center mb-4 text-2xl md:text-3xl font-semibold">
            Cadastro de Paciente
          </h2>
          <p className="text-[#005b96] text-center text-sm md:text-base mb-6">
            Preencha os dados para se cadastrar
          </p>
          <div className="w-full">
            <CadastroForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;