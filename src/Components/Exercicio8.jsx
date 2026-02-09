import React from "react";
import "/src/CSS/exercicio8.css";

function Exercicio8() {
  function verLocal() {
    let analise = {
      id: 1,
      propriedade: {
        nome: "Terra Boa",
        Cidade: "Muriaé",
      },
    };

    let info = document.getElementById("info-local");
    info.innerText = `Local: ${analise.propriedade.nome}, ${analise.propriedade.Cidade}`;
  }

  return (
    <div className="relatorio-local">
      <h2 className="titulo-relatorio">Relatório</h2>

      <button onClick={verLocal} className="botao-relatorio">
        Ver Local
      </button>

      <div id="info-local" className="info-local"></div>
    </div>
  );
}

export default Exercicio8;
