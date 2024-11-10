import "./App.css";
import bolites2 from "./assets/img2.jpeg";
import logobolites from "./assets/logobolites.png";
import { useState } from "react";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import video from "./assets/videoBolites.mp4";
import { CiInstagram } from "react-icons/ci";
import logo from "./assets/logo.png";
import rotulagem from "./assets/rotulagem.png";
import rotulagem2 from "./assets/rotulagem2.png";

const App = () => {
  const [dark, setDark] = useState("Dark");

  const handleDark = () => {
    setDark(dark === "Dark" ? "Light" : "Dark");
    document.body.style.backgroundColor = dark === "Dark" ? "#333" : "#fff";
  };

  return (
    <>
      <nav>
        <h1 className="h1Logo">
          <img src={logobolites} alt="" className="logobolites" />
          <p
            style={{
              fontSize: "10px",
              textAlign: "center",
              color: "#8253b6",
              margin: 0,
              padding: 0,
            }}
          >
            Bolites
          </p>
        </h1>

        <ul>
          <li>
            <a
              href=""
              onClick={() => {
                alert("Em breve");
              }}
            >
              Comprar
            </a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <button className="butonDark" onClick={handleDark}>
              {dark}
            </button>
          </li>
        </ul>
      </nav>

      <section className="section-desc-logo">
        <div>
          <img src={bolites2} alt="" className="img-logo" />
        </div>

        <div className="desk">
          <h2>Bolites, o novo e inovador produto</h2>
          <p>
            É um lanche saudável e sustentável com ingredientes simples e
            nutritivos, garantindo sabor e valor nutricional. Livre de glúten e
            lactose, o Bolites atende pessoas com alergias ou intolerâncias
            alimentares. O preparo foi planejado para ser rápido e acessível,
            oferecendo uma opção prática para o dia a dia
          </p>
          <div className="button-sec">
            <button
              onClick={() => {
                alert("Em breve");
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      </section>

      <section className="nutricional">
        <div className="nutriDiv">
          <span>0%</span>
          <p>Lactose</p>
        </div>
        <div className="nutriDiv">
          <span>0%</span>
          <p>Glúten</p>
        </div>
        <div className="nutriDiv">
          <span>0%</span>
          <p>Conservantes</p>
        </div>
      </section>

      <section className="ingredientes">
        <div className="ingredientes-div">
          <div>
            <video controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="ingrerotu">
            <ul className="ingrelista">
              <h4 style={{ marginBottom: "1rem" }}>Ingredientes: </h4>
              <li>Batata Doce</li>
              <li>Peito de Frango</li>
              <li>Farinha de Arroz</li>
              <li>Ovo</li>
              <li>Sal</li>
              <li>Azeite</li>

              <li>Alho</li>
              <li>Orange Pepper</li>
              <li>Cúrcuma</li>
              <li>Cebola</li>
              <li>Cebolinha</li>
              <li>Salsa</li>

              <li>Tomilho</li>
            </ul>
          </div>
          <div className="rotulagem">
            <img src={rotulagem} alt="" />
            <img src={rotulagem2} alt="" />
          </div>
        </div>
      </section>

      <section className="sections-photos">
        <h4>Mais Algumas Fotos do Produto</h4>
        <div className="photos">
          <img src={img1} alt="" />
          <img src={logo} alt="" />
          <img src={img2} alt="" />
        </div>
      </section>

      <section className="contato">
        <h3>Entre em Contato</h3>
        <form className="contato-form">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Mensagem" />
          <button>Enviar</button>
        </form>
      </section>

      <section className="sections-nutris">
        <div className="nutris">
          <h2>Juliana</h2>
          <a
            href="https://www.instagram.com/julianaContii/"
            target="_blank"
            className="nutri-insta"
          >
            <CiInstagram />
          </a>
        </div>
        <div className="nutris">
          <h2>Kethlen</h2>
          <a
            href="https://www.instagram.com/kethlen__lima/"
            target="_blank"
            className="nutri-insta"
          >
            <CiInstagram />
          </a>
        </div>
        <div className="nutris">
          <h2>Débora</h2>
          <a
            href="https://www.instagram.com/debora_faraco/"
            target="_blank"
            className="nutri-insta"
          >
            <CiInstagram />
          </a>
        </div>
        <div className="nutris">
          <h2>Bruna</h2>
          <a
            href="https://www.instagram.com/brunacarius/"
            target="_blank"
            className="nutri-insta"
          >
            <CiInstagram />
          </a>
        </div>
      </section>

      <footer>
        <p>
          © Vinícius Salles <br />
          Alguns Direitos Reservados.
        </p>
      </footer>
    </>
  );
};

export default App;
