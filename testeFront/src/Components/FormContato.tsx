import React, { useState } from "react";

const FormContato: React.FC = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000); // limpa msg depois de 3s
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome
        </label>
        <input
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005b96] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          E-mail
        </label>
        <input
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005b96] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem
        </label>
        <textarea
          required
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#005b96] focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#005b96] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#004272] transition"
      >
        Enviar
      </button>

      {enviado && (
        <p className="text-green-600 text-center font-medium mt-2">
          ✅ Mensagem enviada com sucesso!
        </p>
      )}
    </form>
  );
};

export default FormContato;
