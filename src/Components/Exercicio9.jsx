import "/src/CSS/exercicio9.css";
import "/src/CSS/cssgeral.css";
function Exercicio9() {
  function verificarEstoque() {
    let item = {
      nome: "Produto A",
      quantidade: 20,
      estoqueMinimo: 10,
    };

    let caixa = document.getElementById("estoque-status");

    if (item.quantidade > 0) {
      caixa.innerText = `Estoque disponível: ${item.quantidade} unidades`;
      caixa.style.color = "#2793ae";
      caixa.style.fontWeight = "bold";
    } else {
      caixa.innerText = "Produto esgotado";
      caixa.style.color = "#c0392b";
      caixa.style.fontWeight = "bold";
    }
  }

  return (
    <div className="container">
      <h2 className="estoque-titulo">Verificar Estoque</h2>

      <button
        onClick={verificarEstoque}
        className="estoque-botao"
      >
        Conferir Estoque
      </button>

      <div
        id="estoque-status"
        className="estoque-status"
      ></div>
    </div>
  );
}

export default Exercicio9;
