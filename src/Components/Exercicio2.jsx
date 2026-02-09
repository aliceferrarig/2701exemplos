import React from "react";
import "/src/CSS/exercicio2.css";

class ExercicioAlerta extends React.Component {
  mostrarAlerta() {
    let mensagem = document.querySelector("#mensagem");
    mensagem.innerHTML = "Alerta ativado";
    mensagem.style.color = "#c0392b";
    mensagem.style.fontWeight = "bold";
  }

  render() {
    return (
      <div className="alerta-container">
        <h2 className="alerta-titulo">Sistema de Alerta</h2>

        <p id="mensagem" className="alerta-mensagem">
          Alerta desativado
        </p>

        <button onClick={this.mostrarAlerta} className="alerta-botao">
          Ativar Alerta
        </button>
      </div>
    );
  }
}

export default ExercicioAlerta;
