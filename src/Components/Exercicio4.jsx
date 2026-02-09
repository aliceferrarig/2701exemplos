import React from "react";
import "/src/CSS/exercicio4.css";

function Exercicio4() {
  function mostrarinsumo() {
    //simulaçao de entrega API
    let insumo = {
      Nome: "Adubo Orgânico",
      Foto: "https://placecats.com/300/200",
      Estoque: "150 Sacos",
    };

    // Buscar elementos
    let titulo = document.getElementById("nome-insumo");
    let imagem = document.getElementById("foto-insumo");

    //aplicar os dados do json nos elementos
    titulo.innerHTML = insumo.nome;
    imagem.src = insumo.foto;
  }
  return (
    <div className="container-insumo">
      <h2 className="titulo-resultado">Resultado Estoque</h2>
      <button onClick={mostrarinsumo} className="botao-insumo">
        Mostrar Insumo
      </button>
      <h3 id="nome-insumo "className="subtitulo-insumo"></h3>
      <img id="foto-insumo" className="imagem-insumo" />
    </div>
  );
}

export default Exercicio4;
