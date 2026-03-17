import Skyline from "./../images/skyline.jpg";
import Supra from "./../images/supra.jpg";
import Lancer from "./../images/lancer.jpg";
import Saleen from "./../images/saleen.jpg";
import "./Body.css";

export default function Body() {
  return (
    <>
      <header>
        <div className="hero">
          <h1>Midnight Club 3</h1>
          <p>Os carros mais insanos das ruas</p>
        </div>
      </header>

      <section className="container">
        <div className="card">
          <img src={Skyline} alt="Skyline" />
          <h2>Nissan Skyline GT-R</h2>
          <p>Um clássico japonês com desempenho absurdo e muito tuning.</p>
        </div>

        <div className="card">
          <img src={Supra} alt="Supra" />
          <h2>Toyota Supra</h2>
          <p>Motor lendário e presença obrigatória nas corridas de rua.</p>
        </div>

        <div className="card">
          <img src={Lancer} alt="Lancer" />
          <h2>Mitsubishi Lancer EVO</h2>
          <p>Perfeito pra drift e controle nas curvas.</p>
        </div>

        <div className="card">
          <img src={Saleen} alt="Mustang" />
          <h2>Ford Mustang Saleen S7</h2>
          <p>Muscle car bruto com potência de sobra.</p>
        </div>
      </section>

      <footer>
        <p>© 2026 - Projeto inspirado em Midnight Club 3</p>
      </footer>
    </>
  );
}
