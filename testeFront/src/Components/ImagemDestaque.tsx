import React from "react";
import ImagemIdosoNaTeleConsulta from "../img/ImagemIdosoNaTeleConsulta.jpg";

export default function ImagemDestaque() {
  return (
    <div className="flex w-full h-full justify-end items-center">
      <img
        src={ImagemIdosoNaTeleConsulta}
        alt="Paciente usando tablet para consulta online"
        className="w-full max-w-[700px] rounded-lg shadow-md transition-transform duration-300 ease-in-out md:ml-24 transform -translate-y-1/4"
      />
    </div>
  );
}