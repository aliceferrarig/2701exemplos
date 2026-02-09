import React from "react";
import "/src/CSS/exercicio6.css";
import "/src/CSS/cssgeral.css";
function Exercicio6() {
  function calcularTotal() {
    let produtos = [
      { nome: "Produto A", preco: 100.5, imposto: 0.15 },
      { nome: "Produto B", preco: 200.0, imposto: 0.10 },
      { nome: "Produto C", preco: 50.75, imposto: 0.20 },
    ];

    let total = 0;

    produtos.forEach((p) => {
      total += p.preco + p.preco * p.imposto;
    });

    let resultado = document.getElementById("total-produtos");
    resultado.innerText = "Total: R$ " + total.toFixed(2);
  }

  return (
    <div className="container">
      <h2 className="total-titulo">Cálculo de Total com Imposto</h2>

      <button onClick={calcularTotal} className="total-botao">
        Calcular Total
      </button>

      <div id="total-produtos" className="total-resultado"></div>
    </div>
  );
}

export default Exercicio6;
