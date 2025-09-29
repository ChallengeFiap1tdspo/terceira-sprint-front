
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../Components/faqs";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="flex-grow">
        <section className="mx-auto px-6 sm:px-8 lg:px-10 py-10 max-w-7xl">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 mb-12 text-center">
            Perguntas Frequentes
          </h2>

       
          <div className="flex flex-col space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-[60%] mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-blue-300 overflow-hidden"
                style={{ marginTop: "2%", marginBottom: "2%" }}
              >
                <button
                  onClick={() => handleClick(index)}
                  className="w-full flex justify-between items-center px-8 py-[40px] font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 bg-gradient-to-r from-[#005b96] to-[#003d66] text-white hover:from-[#004a7c] hover:to-[#002d4d]"
                >
                  <span className="text-left pr-6 text-2xl md:text-3xl font-bold text-white">
                    {faq.pergunta}
                  </span>
                  <span className="ml-3 flex-shrink-0 transition-transform duration-300 bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold">
                    {openIndex === index ? (
                      <FaMinus className="text-2xl" />
                    ) : (
                      <FaPlus className="text-2xl" />
                    )}
                  </span>
                </button>

                {/* Resposta - Como uma gaveta que só aparece quando abre */}
                {openIndex === index && (
                  <div className="bg-white border-t border-blue-300 animate-slideDown">
                    <div className="px-8 py-6 text-blue-900 text-base md:text-lg leading-relaxed">
                      {faq.resposta}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        
          <div className="mt-16 text-center">
            <h3 className="text-blue-900 text-xl font-bold mb-3">
              Não encontrou sua dúvida?
            </h3>
            <p className="mb-6 text-blue-800 text-base leading-relaxed">
              Entre em contato conosco e teremos prazer em ajudar!
            </p>

            <Link
              to="/contato"
              className="inline-flex items-center px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-lg border-2 border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              📞 Fale Conosco
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;