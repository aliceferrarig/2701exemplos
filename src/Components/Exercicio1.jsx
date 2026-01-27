import React from "react";

function Exercicio1() {
  function atualizarStatus() {
    {
      let etiqueta = document.getElementById("status-entrega");
      etiqueta.innerHTML = "Pedido entregue";
      etiqueta.style.color = "green";
    }
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Controle de Entregas</h2>
      <p id="status-entrega">Aguardando entrega...</p>

      <button onClick={Exercicio1}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio1;
