import React from "react";
import "/src/CSS/exercicio1.css";
import "/src/CSS/cssgeral.css";
function Exercicio1() {
  function atualizarStatus() {
    let etiqueta = document.getElementById("status-entrega");
    etiqueta.innerHTML = "Pedido entregue";
    etiqueta.style.color = "#27ae60";
    etiqueta.style.fontWeight = "bold";
  }

  return (
    <div className="container">
      <h2 className="entrega-titulo">Controle de Entregas</h2>

      <p id="status-entrega" className="entrega-status">
        Aguardando entrega...
      </p>

      <button
        onClick={atualizarStatus}
        className="entrega-botao"
      >
        Atualizar Status
      </button>
    </div>
  );
}

export default Exercicio1;
