import React, { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

const FormContato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Dados do formulário:", formData);
      setMessageSent(true);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
      });
      
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-[#005b96] mb-4">Envie uma Mensagem</h2>
      
      {messageSent && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Mensagem enviada com sucesso! Retornaremos em breve.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005b96] focus:border-transparent"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005b96] focus:border-transparent"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005b96] focus:border-transparent"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
            Assunto *
          </label>
          <select
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005b96] focus:border-transparent"
          >
            <option value="">Selecione um assunto</option>
            <option value="duvida">Dúvida</option>
            <option value="orcamento">Orçamento</option>
            <option value="reclamacao">Reclamação</option>
            <option value="sugestao">Sugestão</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem *
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#005b96] focus:border-transparent resize-vertical"
            placeholder="Descreva sua mensagem aqui..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className=" bg-[#00a1e0] py-[0.5rem] px-[.10rem] text-[1.2rem] text-[#f8f9fa]  rounded-[1rem] cursor-pointer"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
    </div>
  );
};

export default FormContato;