import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";
import Contato from "./routes/Contato";
import PrimeiroContato from "./routes/PrimeiroContato";
import Ajuda from "./routes/Ajuda";
import Faq from "./routes/Faq";
import Integrantes from "./routes/Integrantes";
import Sobre from "./routes/Sobre"; 

import "../global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "contato", element: <Contato /> },
      { path: "primeiro-contato", element: <PrimeiroContato /> },
      { path: "ajuda", element: <Ajuda /> },
      { path: "faq", element: <Faq /> },
      { path: "equipe", element: <Integrantes /> },
      { path: "sobre", element: <Sobre /> }, // <-- nova rota
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <div className="app-body flex flex-col min-h-screen">
      <main className="flex-grow">
        <RouterProvider router={router} />
      </main>
    </div>
  </StrictMode>
);
