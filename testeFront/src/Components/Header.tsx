import React from "react";
import logoHospital from "../img/logo_hospital.png";

const Header: React.FC = () => {
  const linkBase =
    "no-underline font-bold text-base px-6 py-2.5 transition-colors";
  const active = "bg-[#00a1e0] text-white";
  const inactive = "text-[#005b96] hover:bg-gray-100";

  // Função para verificar a rota atual e aplicar estilo "ativo"
  const getLinkClass = (path: string) => {
    return `${linkBase} ${
      window.location.pathname === path ? active : inactive
    }`;
  };

  return (
    <header
      className="w-full border-b-[1px] border-b-[#817f81]"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="w-[90%] mx-auto flex items-center justify-start py-4">
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src={logoHospital}
            alt="Logo Hospital"
            className="max-h-[80px] w-auto"
          />
        </a>

        <nav className="ml-4" aria-label="Menu principal">
          <ul
            className="flex items-center gap-8 whitespace-nowrap list-none m-0 p-0"
            style={{ gap: "1.75rem" }}
          >
            <li>
              <a href="/" className={getLinkClass("/")}>
                Início
              </a>
            </li>
            <li>
              <a href="/faq" className={getLinkClass("/faq")}>
                FAQ
              </a>
            </li>
            <li>
              <a href="/contato" className={getLinkClass("/contato")}>
                Contato
              </a>
            </li>
            <li>
              <a href="/equipe" className={getLinkClass("/equipe")}>
                Equipe
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
