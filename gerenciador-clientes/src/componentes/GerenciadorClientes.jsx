import React, { useState } from "react";
import ListaClientes from "./ListaClientes";
import ListaFaturas from "./ListaFaturas";
import ModalPagamento from "./ModalPagamento";
import userClientes from "../hooks/userClientes";

const GerenciadorClientes = () => {
  const { clientes, setClientes, buscarClientes } = userClientes();
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [mostrarFaturas, setMostrarFaturas] = useState(false);
  const [termoBusca, setTermoBusca] = useState("");
  const [faturaSelecionada, setFaturaSelecionada] = useState(null);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);

  const calcularIdade = (dataNasc) => {
    const hoje = new Date();
    const nascimento = new Date(dataNasc);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) idade--;
    return idade;
  };

  const registrarPagamento = (fatura) => {
    const dataPagamento = new Date().toISOString().split("T")[0];

    fetch(`http://localhost:8080/faturas/${fatura.id}/pagamento`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataPagamento })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Erro ao registrar pagamento");
        }
        return res.json();
      })
      .then(faturaAtualizada => {
        const clienteAtualizado = {
          ...clienteSelecionado,
          faturas: clienteSelecionado.faturas.map(f =>
            f.id === faturaAtualizada.id ? faturaAtualizada : f
          )
        };
        setClienteSelecionado(clienteAtualizado);
        buscarClientes();
        setMostrarPagamento(false);
      })
      .catch(err => {
        console.error("Erro ao registrar pagamento:", err);
        alert("Erro ao registrar pagamento.");
      });
  };

  return (
    <div className="painel">
      {!mostrarFaturas && (
        <ListaClientes
          clientes={clientes}
          termoBusca={termoBusca}
          setTermoBusca={setTermoBusca}
          setClienteSelecionado={setClienteSelecionado}
          setMostrarFaturas={setMostrarFaturas}
          calcularIdade={calcularIdade}
        />
      )}
      {mostrarFaturas && clienteSelecionado && (
        <ListaFaturas
          clienteSelecionado={clienteSelecionado}
          setMostrarFaturas={setMostrarFaturas}
          setFaturaSelecionada={setFaturaSelecionada}
          setMostrarPagamento={setMostrarPagamento}
        />
      )}
      {mostrarPagamento && faturaSelecionada && (
        <ModalPagamento
          faturaSelecionada={faturaSelecionada}
          setMostrarPagamento={setMostrarPagamento}
          registrarPagamento={registrarPagamento}
        />
      )}
    </div>
  );
};

export default GerenciadorClientes;
