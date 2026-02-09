import React from "react";
import "/src/CSS/exercicio5.css";
import "/src/CSS/cssgeral.css";
function Exercicio5() {
  function saudarCliente() {
    let nomeDigitado = document.getElementById("nome-cliente").value;
    let mensagemcobranca = document.getElementById("mensagem-cobranca");

    mensagemcobranca.innerText = "Olá, " + nomeDigitado + "!";
  }

  return (
    <div className="container">
      <h2 className="cobranca-titulo">Cobrança</h2>

      <input
        id="nome-cliente"
        className="cobranca-input"
        placeholder="Digite seu nome"
      />

      <button
        onClick={saudarCliente}
        className="cobranca-botao"
      >
        Saudar
      </button>

      <p id="mensagem-cobranca" className="cobranca-mensagem"></p>
    </div>
  );
}

export default Exercicio5;
