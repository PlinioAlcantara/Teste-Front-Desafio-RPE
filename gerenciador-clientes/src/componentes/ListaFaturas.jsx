import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const formatarData = (dataISO) => {
  if (!dataISO) return "";
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const ListaFaturas = ({
  clienteSelecionado,
  setMostrarFaturas,
  setFaturaSelecionada,
  setMostrarPagamento,
}) => {
  return (
    <div className="fade-in container">
      <button onClick={() => setMostrarFaturas(false)} className="botao voltar">
        <FaChevronLeft /> Voltar
      </button>
      <h2 className="titulo futurista">Faturas de {clienteSelecionado.nome}</h2>
      <div className="grade-faturas">
        {clienteSelecionado.faturas.map((f) => (
          <div className="card futurista fade-in" key={f.id}>
            <p>
              <strong>Valor:</strong> R$ {f.valor}
            </p>
            <p>
              <strong>Vencimento:</strong> {formatarData(f.dataVencimento)}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {f.status === "P"
                ? "Paga"
                : new Date(f.dataVencimento) <
                  new Date(new Date().setDate(new Date().getDate() - 3))
                ? "Atrasada"
                : "Em aberto"}
            </p>
            <p>
              <strong>Pagamento:</strong>{" "}
              {f.dataPagamento ? formatarData(f.dataPagamento) : "Não pago"}
            </p>
            {f.status !== "P" && (
              <button
                className="botao"
                onClick={() => {
                  setFaturaSelecionada(f);
                  setMostrarPagamento(true);
                }}
              >
                Registrar Pagamento
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaFaturas;
