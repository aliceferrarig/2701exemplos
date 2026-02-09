import React from "react";
import "/src/CSS/exercicio7.css";

function Exercicio7() {
  function mostrarPrimeiraEntrega() {
    let entregas = [
      "Fazenda Primavera",
      "Fazenda Sol Nascente",
      "Fazenda Boa Vista",
    ];

    let campo = document.getElementById("primeira-entrega");
    campo.innerText = `Primeira entrega: ${entregas[0]}`;
  }

  return (
    <div className="lista-entrega">
      <h2 className="lista-titulo">Lista de Entregas</h2>

      <button
        onClick={mostrarPrimeiraEntrega}
        className="lista-botao"
      >
        Mostrar Primeira Entrega
      </button>

      <div
        id="primeira-entrega"
        className="primeira-entrega"
      ></div>
    </div>
  );
}

export default Exercicio7;
