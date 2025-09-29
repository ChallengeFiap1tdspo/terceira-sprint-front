
export interface Passo {
  numero: number;
  titulo: string;
  texto: string;
}

export interface Recurso {
  titulo: string;
  texto: string;
  link: string;
}

export const passosAjuda: Passo[] = [
  { numero: 1, titulo: "Primeiro acesso", texto: "Acesse o portal do Paciente HC pelo site ou aplicativo." },
  { numero: 2, titulo: "Cadastrar Senha", texto: 'Clique na opção "Cadastrar Senha".' },
  { numero: 3, titulo: "Localizar Paciente", texto: 'Digite o número do CPF do paciente e clique na opção "Localizar Paciente".' },
  { numero: 4, titulo: "Confirmar Dados", texto: "Informe dados para contato, confirme as informações pessoais e registre uma senha de acesso." },
  { numero: 5, titulo: "Acessar Portal", texto: 'Clique novamente em "Cadastrar Senha" e "Acessar Agora".' },
  { numero: 6, titulo: "Login", texto: "Digite o CPF e a senha cadastrada." },
  { numero: 7, titulo: "Teleconsultas", texto: 'Acesse o Portal, selecione a opção "Teleconsultas" e aceite o termo de autorização se estiver de acordo.' },
  { numero: 8, titulo: "Iniciar Atendimento", texto: "Selecione o teleatendimento desejado. Habilite câmera, microfone e aguarde o profissional entrar na sala." },
];

export const recursosAjuda: Recurso[] = [
  {
    titulo: "Primeiro Acesso ao Portal",
    texto: "Assista a um tutorial simples mostrando cada passo do login.",
    link: "https://drive.google.com/file/d/19GFDe1AETkPKZTzSg7ld1IKye0t4CS6-/view?usp=sharing",
  },
  {
    titulo: "Vídeo Explicativo",
    texto: "Tutorial completo mostrando como acessar o portal e iniciar a consulta.",
    link: "https://drive.google.com/file/d/1_0PZ1fi3FKTEP9mPQ2QC2JBMCdBslFLE/view?usp=sharing",
  },
];
