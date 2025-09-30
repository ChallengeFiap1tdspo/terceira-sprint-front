import React from "react";
import ContactIcon from "../Components/ContactIcon";
import FormContato from "../Components/FormContato";

import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contato: React.FC = () => {
  const contatos = [
    { 
      icon: <FiPhone className="w-6 h-6" />, 
      title: "Telefone", 
      description: "(11) 1111-1111" 
    },
    { 
      icon: <FaWhatsapp className="w-6 h-6" />, 
      title: "WhatsApp", 
      description: "(11) 99999-9999" 
    },
    { 
      icon: <FiMail className="w-6 h-6" />, 
      title: "E-mail", 
      description: "hc@gmail.com" 
    },
    { 
      icon: <FiMapPin className="w-6 h-6" />, 
      title: "Endereço", 
      description: "Av. Dr. Enéas Carvalho de Aguiar, 255 - SP" 
    },
    { 
      icon: <FiClock className="w-6 h-6" />, 
      title: "Horário de Atendimento", 
      description: "Seg à Sex: 8h às 18h" 
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold text-[#005b96] mb-4">
            Entre em Contato Conosco
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos à disposição para tirar suas dúvidas e oferecer o melhor atendimento
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Informações de Contato */}
            <div className="lg:w-2/5">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#005b96] mb-6">Nossos Contatos</h2>
                <div className="space-y-4">
                  {contatos.map((contato, index) => (
                    <ContactIcon key={index} {...contato} />
                  ))}
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:w-3/5">
              <FormContato />
            </div>
            
          </div>
        </div>
      </section>

  
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-[#005b96] mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.331272137361!2d-46.6700000!3d-23.5615000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c93a7d0c1f%3A0x3f8e6a3c9f30a7b8!2sAv.%20Dr.%20En%C3%A9as%20Carvalho%20de%20Aguiar%2C%20255%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1632412345678!5m2!1spt-BR!2sbr"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] border-0 w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;