import React from "react";
import GerenciadorClientes from "./componentes/GerenciadorClientes";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="painel">
      <header className="cabecalho">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="titulo futurista">Gerenciador de Clientes</h1>
      </header>
      <GerenciadorClientes />
    </div>
  );
}

export default App;
