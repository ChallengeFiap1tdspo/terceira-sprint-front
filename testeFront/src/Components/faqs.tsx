
import React from "react";

export interface FAQItem {
  pergunta: React.ReactNode; 
  resposta: React.ReactNode;
}

export const faqs: FAQItem[] = [
  {
    pergunta: <span className="text-[#f8f9fa] text-8x2">1. Qual é o objetivo principal do projeto?</span>,
    resposta: (
      <p>
        Nosso projeto tem como objetivo desenvolver um site para facilitar o acesso,
        especialmente pensado para pessoas idosas ou com pouca familiaridade com
        tecnologia. Queremos democratizar o acesso à saúde digital.
      </p>
    ),
  },
  {
    pergunta: <span className="text-[#f8f9fa] text-xl">2. A plataforma será gratuita?</span>,
    resposta: (
      <p>
        Sim. Nosso projeto foi desenvolvido para facilitar o acesso à saúde digital,
        oferecendo uma versão totalmente gratuita.
      </p>
    ),
  },
  {
    pergunta: <span className="text-[#f8f9fa] text-xl">3. É seguro usar meus dados no aplicativo?</span>,
    resposta: (
      <p>
        Sim, utilizamos criptografia avançada e seguimos todas as normas de proteção de
        dados.
      </p>
    ),
  },
  {
    pergunta: <span className="text-[#f8f9fa] text-xl">4. Quais são os requisitos técnicos para usar a plataforma?</span>,
    resposta: (
      <p>
        Nenhum, nosso site foi pensado para atender todos os públicos, de celulares a
        computadores.
      </p>
    ),
  },
  {
    pergunta: <span className="text-[#f8f9fa] text-xl">5. Quando a plataforma estará disponível ao público?</span>,
    resposta: (
      <p>
        Estamos na fase final de desenvolvimento e testes. Previsão de lançamento para
        o final de 2025.
      </p>
    ),
  },
];
