import React from "react";
import ContactIcon from "../Components/ContactIcon";
import FormContato from "../Components/FormContato";

// Ícones do React Icons
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contato: React.FC = () => {
  const contatos = [
    { icon: <FiPhone className="w-6 h-6 text-[#005b96]" />, title: "Telefone", description: "(11) 1111-1111" },
    { icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />, title: "WhatsApp", description: "(11) 99999-9999" },
    { icon: <FiMail className="w-6 h-6 text-[#005b96]" />, title: "E-mail", description: "hc@gmail.com" },
    { icon: <FiMapPin className="w-6 h-6 text-[#005b96]" />, title: "Endereço", description: "Av. Dr. Enéas Carvalho de Aguiar, 255 - SP" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Cabeçalho */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-[#005b96] mb-2 text-center">
            Entre em Contato Conosco
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Estamos à disposição para tirar suas dúvidas
          </p>
        </div>
      </section>

      {/* Contatos e formulário */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row gap-8">
          {/* Contatos */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h2 className="text-lg font-bold text-[#005b96] mb-3">Nossos Contatos</h2>
              <div className="space-y-2">
                {contatos.map((contato, index) => (
                  <ContactIcon key={index} {...contato} />
                ))}
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:w-2/3">
            <FormContato />
          </div>
        </div>
      </section>

      {/* Mapa */}
      <div className="mt-6 rounded-2xl overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.331272137361!2d-46.6700000!3d-23.5615000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c93a7d0c1f%3A0x3f8e6a3c9f30a7b8!2sAv.%20Dr.%20En%C3%A9as%20Carvalho%20de%20Aguiar%2C%20255%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1632412345678!5m2!1spt-BR!2sbr"
          width="100%"
          height="250"
        
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default Contato;
