import React from "react";

const ModalPagamento = ({ faturaSelecionada, setMostrarPagamento, registrarPagamento }) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <h3>Confirmar pagamento?</h3>
      <p>Valor: R$ {faturaSelecionada?.valor}</p>
      <div className="acoes-modal">
        <button className="botao" onClick={() => setMostrarPagamento(false)}>Cancelar</button>
        <button className="botao" onClick={() => registrarPagamento(faturaSelecionada)}>Confirmar</button>
      </div>
    </div>
  </div>
);

export default ModalPagamento;