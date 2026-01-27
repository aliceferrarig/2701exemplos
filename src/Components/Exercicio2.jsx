import React from "react";

class ExercicioAlerta extends React.Component {
  mostrarAlerta() {
    let mensagem = document.querySelector("#mensagem");
    mensagem.innerHTML = "Alerta ativado";
    mensagem.style.color = "red";
  }

  render() {
    return (
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h2>Sistema de Alerta</h2>

        <p id="mensagem">Alerta desativado</p>

        <button onClick={this.mostrarAlerta}>
          Ativar Alerta
        </button>
      </div>
    );
  }
}

export default ExercicioAlerta;
