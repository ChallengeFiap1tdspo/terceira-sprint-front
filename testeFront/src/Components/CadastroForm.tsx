import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type CadastroFormInputs = {
  nome: string;
  cpf: string;
  dataNasc: string;
  email: string;
  telefone: string;
  endereco?: string;
};

const CadastroForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroFormInputs>();

  const onSubmit: SubmitHandler<CadastroFormInputs> = (data) => {
    console.log(data);
    alert("Cadastro realizado com sucesso!");
    navigate("/primeiro-contato");
  };

  const inputClass =
    "w-full py-4 px-6 text-lg border border-gray-300 rounded-full bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#005b96] focus:ring-4 focus:ring-[#005b96]/25 transition duration-150";

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-[1200px] bg-[#f7f7f5] rounded-3xl p-10 shadow-lg overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <fieldset className="border-0 p-0">
            <legend className="mx-auto text-[#005b96] font-bold text-sm bg-white px-4 rounded-full border-2 border-[#005b96]">Dados Pessoais</legend>

            <div className="mt-6 space-y-6">
              <div>
                <label className="block mb-2 font-bold text-[#005b96]">Nome Completo</label>
                <input
                  {...register("nome", { required: "Nome é obrigatório" })}
                  className={inputClass}
                  placeholder="Seu nome completo"
                />
                {errors.nome && <p className="text-red-500 text-xs mt-2">{errors.nome.message}</p>}
              </div>

              <div>
                <label className="block mb-2 font-bold text-[#005b96]">CPF</label>
                <input
                  {...register("cpf", { required: "CPF é obrigatório", minLength: { value: 11, message: "Digite 11 números" } })}
                  placeholder="Somente números"
                  inputMode="numeric"
                  maxLength={11}
                  className={inputClass}
                />
                {errors.cpf && <p className="text-red-500 text-xs mt-2">{errors.cpf.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-bold text-[#005b96]">Data de Nascimento</label>
                  <input
                    type="date"
                    {...register("dataNasc", { required: "Data de nascimento é obrigatória" })}
                    className={inputClass}
                  />
                  {errors.dataNasc && <p className="text-red-500 text-xs mt-2">{errors.dataNasc.message}</p>}
                </div>

                <div>
                  <label className="block mb-2 font-bold text-[#005b96]">Telefone</label>
                  <input
                    type="tel"
                    {...register("telefone", { required: "Telefone é obrigatório" })}
                    placeholder="(XX) XXXXX-XXXX"
                    className={inputClass}
                  />
                  {errors.telefone && <p className="text-red-500 text-xs mt-2">{errors.telefone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block mb-2 font-bold text-[#005b96]">E-mail</label>
                <input
                  type="email"
                  {...register("email", { required: "Email é obrigatório" })}
                  className={inputClass}
                  placeholder="seu@exemplo.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block mb-2 font-bold text-[#005b96]">Endereço</label>
                <input
                  {...register("endereco")}
                  className={inputClass}
                  placeholder="Rua, nº, complemento"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-4 text-lg font-bold rounded-full bg-gradient-to-r from-[#005b96] to-[#003d66] text-white transition transform hover:brightness-105 active:scale-[0.995] shadow-lg"
                >
                  Cadastrar e continuar
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
