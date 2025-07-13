import React, { useState } from "react";
import ListaClientes from "./ListaClientes";
import ListaFaturas from "./ListaFaturas";
import ModalPagamento from "./ModalPagamento";
import useClientes from "../hooks/useClientes";

const GerenciadorClientes = () => {
  const { clientes, setClientes, buscarClientes } = useClientes();
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [faturaSelecionada, setFaturaSelecionada] = useState(null);
  const [mostrarFaturas, setMostrarFaturas] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);

  const abrirFaturas = (cliente) => {
    setClienteSelecionado(cliente);
    setMostrarFaturas(true);
  };

  const abrirModalPagamento = (fatura) => {
    setFaturaSelecionada(fatura);
    setMostrarPagamento(true);
  };

  const registrarPagamento = () => {
    fetch(`http://localhost:8081/faturas/${faturaSelecionada.id}/pagamento`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataPagamento: new Date().toISOString().split("T")[0] })
    })
      .then((res) => res.json())
      .then(() => {
        setMostrarPagamento(false);
        setFaturaSelecionada(null);
        buscarClientes();
      });
  };

  return (
    <div className="painel">
      {mostrarFaturas ? (
        <ListaFaturas
          cliente={clienteSelecionado}
          voltar={() => setMostrarFaturas(false)}
          abrirModalPagamento={abrirModalPagamento}
        />
      ) : (
        <ListaClientes clientes={clientes} abrirFaturas={abrirFaturas} />
      )}
      {mostrarPagamento && (
        <ModalPagamento
          fatura={faturaSelecionada}
          cancelar={() => setMostrarPagamento(false)}
          confirmar={registrarPagamento}
        />
      )}
    </div>
  );
};

export default GerenciadorClientes;
