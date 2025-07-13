import React from "react";
import { FaSearch } from "react-icons/fa";

const ListaClientes = ({
  clientesFiltrados,
  termoBusca,
  setTermoBusca,
  calcularIdade,
  setClienteSelecionado,
  setMostrarFaturas
}) => {
  return (
    <div className="container">
      <h1 className="titulo futurista">Clientes</h1>
      <div className="busca-box">
        <FaSearch className="icone-busca" />
        <input
          type="text"
          placeholder="Buscar por nome ou CPF"
          value={termoBusca}
          onChange={e => setTermoBusca(e.target.value)}
          className="campo-busca"
        />
      </div>
      <table className="tabela tabela-moderna">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Idade</th>
            <th>Status</th>
            <th>Limite</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map(c => (
            <tr key={c.id}>
              <td>{c.nome}</td>
              <td>{c.cpf}</td>
              <td>{calcularIdade(c.dataNascimento)}</td>
              <td>{c.statusBloqueio === 'B' ? 'Bloqueado' : 'Ativo'}</td>
              <td>R$ {c.limiteCredito}</td>
              <td>
                <button className="botao" onClick={() => {
                  setClienteSelecionado(c);
                  setMostrarFaturas(true);
                }}>
                  Ver Faturas
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaClientes;
