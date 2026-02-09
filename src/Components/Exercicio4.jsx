import React from "react";
import "/src/CSS/exercicio4.css";
import "/src/CSS/cssgeral.css";

function Exercicio4() {
  function mostrarInsumo() {
    // simulação de retorno da API
    const insumo = {
      nome: "Adubo Orgânico",
      foto: "https://placecats.com/300/200",
      estoque: "150 Sacos",
    };

    const titulo = document.getElementById("nome-insumo");
    const imagem = document.getElementById("foto-insumo");

    titulo.innerText = insumo.nome;
    imagem.src = insumo.foto;
    imagem.style.display = "block";
  }

  return (
    <div className="container">
      <h2 className="titulo-resultado">Resultado Estoque</h2>

      <button onClick={mostrarInsumo} className="botao-insumo">
        Mostrar Insumo
      </button>

      <h3 id="nome-insumo" className="subtitulo-insumo"></h3>

      <img
        id="foto-insumo"
        className="imagem-insumo"
        alt="Imagem do insumo"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Exercicio4;
