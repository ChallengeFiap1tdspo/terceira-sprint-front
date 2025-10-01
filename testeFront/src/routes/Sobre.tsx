import React from "react";

export default function Sobre() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003d66] mb-10">
          Sobre o Projeto
        </h1>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Estamos desenvolvendo uma plataforma inovadora para facilitar o acesso
          à telemedicina para pessoas idosas, com foco em usabilidade e
          acessibilidade.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Nosso objetivo é criar uma solução que seja intuitiva mesmo para
          usuários com pouca experiência tecnológica, garantindo que todos
          tenham acesso a cuidados médicos de qualidade.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Teleconsulta – Hospital das Clínicas: consultas médicas online
          acessíveis para toda a comunidade.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Comprometidos com a saúde e bem-estar dos nossos pacientes.
        </p>
      </div>
    </main>
  );
}
