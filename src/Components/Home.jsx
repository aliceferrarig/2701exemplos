import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./exercicio5";
import Exercicio6 from "./Exercicio6";
import Exercicio7 from "./Exercicio7";
import Exercicio8 from "./Exercicio8";
import Exercicio9 from "./Exercicio9";
import Exercicio10 from "./Exercicio10";
import "/src/CSS/home.css";
function Home() {
  return (
    <div className="pagina">
      
      <header className="header">
        <h1>Sistemas Técnico em Informática</h1>
        <p>Exercícios práticos em React</p>
      </header>

      <main className="conteudo">
        <div className="cards">
          <Exercicio1 />
          <Exercicio2 />
          <Exercicio3 />
          <Exercicio4 />
          <Exercicio5 />
          <Exercicio6 />
          <Exercicio7 />
          <Exercicio8 />
          <Exercicio9 />
          <Exercicio10 />
        </div>
      </main>

      <footer className="footer">
        © 2026 • Projeto acadêmico • Técnico em Informática
      </footer>

    </div>
  );
}
export default Home;
