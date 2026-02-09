import React from "react";
import "/src/CSS/exercicio3.css";

function Exercicio3() {
  function processardados() {
    // simulação de JSON
    let fatura = {
      cliente: "João Silva",
      valor: 250.75,
      vencimento: "2024-07-15",
    };

    let display = document.getElementById("detalhes-fatura");
    display.innerHTML = `
      Cliente: ${fatura.cliente} <br>
      Valor: R$ ${fatura.valor} <br>
      Vencimento: ${fatura.vencimento}
    `;
  }

  return (
    <div className="fatura-container">
      <h2 className="fatura-titulo">Processamento de Dados de Fatura</h2>
      <p className="fatura-subtitulo">Resultado Financeiro</p>

      <button
        onClick={processardados}
        className="fatura-botao"
      >
        Processar Dados
      </button>

      <div
        id="detalhes-fatura"
        className="fatura-detalhes"
      />
    </div>
  );
}

export default Exercicio3;
