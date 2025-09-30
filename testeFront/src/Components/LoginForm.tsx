import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type LoginFormInputs = {
  cpf: string;
  idade: number;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    if (data.cpf.length === 11 && data.idade >= 0) {
      alert("Login com sucesso!");
      navigate("/ajuda");
    } else {
      alert("Login sem sucesso! Verifique os dados.");
    }
  };

  const inputClass =
    "w-full py-4 px-6 text-xl border border-gray-300 rounded-full bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#005b96] focus:ring-4 focus:ring-[#005b96]/25 transition duration-150";

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-6">
  
      <div className="w-full max-w-[1200px] bg-[#f7f7f5] rounded-3xl p-12 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label className="block mb-3 font-bold text-[#005b96] text-xl">CPF</label>
            <input
              {...register("cpf", { required: "CPF é obrigatório", minLength: { value: 11, message: "Digite 11 números" } })}
              placeholder="00000000000"
              inputMode="numeric"
              maxLength={11}
              className={inputClass + " max-w-full"}
            />
            {errors.cpf && <p className="text-red-600 text-sm mt-2">{errors.cpf.message}</p>}
          </div>

          <div>
            <label className="block mb-3 font-bold text-[#005b96] text-xl">Idade</label>
            <input
              type="number"
              {...register("idade", {
                required: "Idade é obrigatória",
                min: { value: 0, message: "Idade inválida" },
              })}
              placeholder="Ex: 70"
              min={0}
              className={inputClass + " max-w-full"}
            />
            {errors.idade && <p className="text-red-600 text-sm mt-2">{errors.idade.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-6 text-2xl font-semibold rounded-full bg-gradient-to-r from-[#005b96] to-[#003d66] text-white shadow-lg hover:brightness-105 active:scale-[0.995] transition transform"
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
