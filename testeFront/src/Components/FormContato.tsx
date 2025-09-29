import React from "react";

const FormContato: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-[#005b96] mb-6 text-center">
        Fale Conosco
      </h2>

      <form className="space-y-4">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#005b96] focus:ring focus:ring-[#005b96]/30"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#005b96] focus:ring focus:ring-[#005b96]/30"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            placeholder="(11) 99999-9999"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#005b96] focus:ring focus:ring-[#005b96]/30"
          />
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={4}
            placeholder="Digite sua mensagem..."
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#005b96] focus:ring focus:ring-[#005b96]/30"
          ></textarea>
        </div>

        {/* Botão */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#005b96] text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#00487a] transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContato;
