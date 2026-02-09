import "/src/CSS/cssgeral.css";
import "/src/CSS/exercicio10.css";
function Exercicio10() {
 function realizarCotacao() {
    let valorDigitado = document.getElementById("input-preco").value;
    let cotacao = {
        fornecedor: "Fornecedor A",
        valorSugerido: valorDigitado,
        status: "Pendente"
    };
document.getElementById("res-fornecedor").innerText =
"Fornecedor: " + cotacao.fornecedor;
document.getElementById("res-valor").innerText =
"Valor: R$ " + cotacao.valorSugerido;
document.getElementById("res-status").innerText =
"Status: " + cotacao.status;
 }
   
return ( <div className="container">
        <h2 className="cotacao-titulo">Cotação de Preços</h2>
        <input
          id="input-preco"
          type="number"
          placeholder="Digite o valor da cotação"
          className="cotacao-input"
        />
        <button onClick={realizarCotacao} className="cotacao-botao">
          Realizar Cotação
        </button>
        <div className="resultados">
            <p id="res-fornecedor" className="cotacao-resultado"></p>
            <p id="res-valor" className="cotacao-resultado"></p>
            <p id="res-status" className="cotacao-resultado"></p>
        </div>
</div>
);
}
export default Exercicio10
