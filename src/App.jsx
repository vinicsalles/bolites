import { useEffect } from "react";
import "./App.css";
import bolites2 from "./assets/img2.jpeg";
import logobolites from "./assets/logobolites.png";
import { useState } from "react";

import video from "./assets/videoBolites.mp4";
const App = () => {
  const [porcentagem, setPorcentagem] = useState(100);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setPorcentagem((prev) => (prev > 0 ? prev - 1 : 0));
    }, 10);
    if (porcentagem === 0) clearInterval(intervalo);
    return () => clearInterval(intervalo);
  }, [porcentagem]);
  return (
    <>
      <nav>
        <h1 className="h1Logo">
          <img src={logobolites} alt="" height={50} width={50} />
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
            <a href="">Comprar</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>

          <li>
            <button className="butonDark">Tema Dark</button>
          </li>
        </ul>
      </nav>

      <section className="section-desc-logo">
        <div>
          <img
            src={bolites2}
            alt=""
            width={400}
            height={550}
            className="img-logo"
          />
        </div>

        <div className="desk">
          <h2>Bolites, o novo e inovador produto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            faucibus ligula. Sed facilisis, velit vel viverra consectetur, nunc
            nulla fringilla nunc, sed tristique velit nunc vel justo. Donec
            euismod auctor mauris, non tempus ex lacinia in.
          </p>
          <div className="button-sec">
            <button>Saiba mais</button>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      <section className="nutricional">
        <div className="nutriDiv">
          <span>{porcentagem}%</span>
          <p>Lactose</p>
        </div>
        <div className="nutriDiv">
          <span>{porcentagem}%</span>
          <p>Glúten</p>
        </div>
        <div className="nutriDiv">
          <span>{porcentagem}%</span>
          <p>Conservantes</p>
        </div>
      </section>

      <section className="ingredientes">
        <h3>Ingredientes</h3>
        <div className="ingredientes-div">
          <div>
            <video height={600} controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div>
            <h4>Ingre</h4>
            <ul>
              <li>pao</li>
              <li>farinha</li>
              <li>fermento</li>
              <li>batata</li>
              <li>agua</li>
              <li>oleo</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
