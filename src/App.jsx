import InteractiveCall from './components/InteractiveCall';
import InteractiveForm from './components/InteractiveForm';
import { useState } from 'react';

function App() {
  const [dataForm, setDataForm] = useState(false);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [IMCresult, setIMCresult] = useState(0);
  const [name, setName] = useState("");
  var limitIMC = Math.min(50, Math.max(0, IMCresult));
  var roundIMC = Math.floor(limitIMC)

  const stateForm = (i) => {
    setDataForm(i)
  }
  const stateIMC = (i) => {
    setIMCresult(i)
  }
  const stateName = (i) => {
    setName(i)
  }
  const stateWeight = (i) => {
    setWeight(i)
  }
  const stateHeight = (i) => {
    setHeight(i)
  }
  const msgIMC = () => {
    if (roundIMC < 16) {
      return (
        <p className="text msg-alert">
          <b>Cuidado</b> {name}!!<br />
          Você está extremamente abaixo do peso ideal.
        </p>
      )
    } else if (roundIMC == 16) {
      return (
        <p className="text msg-alert">
          <b>Cuidado</b> {name}!!<br />
          Você está muito abaixo do peso ideal.
        </p>
      )
    } else if (roundIMC == 17) {
      return (
        <p className="text msg-alert">
          <b>Cuidado</b> {name}!!<br />
          Você está abaixo do peso ideal.
        </p>
      )
    } else if (roundIMC <= 24) {
      return (
        <p className="text msg-alert">
          <b>Parabéns</b> {name}!!<br />
          Seu peso está na margem saudável.
        </p>
      )
    } else if (roundIMC <= 29) {
      return (
        <p className="text msg-alert">
          <b>Cuidado</b> {name}!!<br />
          Você está com excesso de peso.
        </p>
      )
    } else if (roundIMC <= 34) {
      return (
        <p className="text msg-alert">
          <b>Cuidado</b> {name}!!<br />
          Você está com obesidade grau I.
        </p>
      )
    } else if (roundIMC <= 39) {
      return (
        <p className="text msg-alert">
          <b>Cuidado</b> {name}!!<br />
          Você está com obesidade grau II.
        </p>
      )
    } else {
      return (
        <p className="text msg-alert">
          <b>Cuidado</b> {name}!! Você está com obesidade grau III.
        </p>
      )
    }
  }
  return (
    <div className="container">
      {!dataForm && (
        <>
          <InteractiveCall />
          <InteractiveForm
            stateForm={stateForm}
            stateIMC={stateIMC}
            stateName={stateName}
            stateWeight={stateWeight}
            stateHeight={stateHeight} />
        </>
      )}
      {dataForm && (
        <section className="result-container fade-in">
          <div className="wrapper">
            <article className="status-user">
              <div className="status-box">
                <h4 className="title">Nome</h4>
                <p className="text">{name}</p>
              </div>
              <div className="status-box side--edges">
                <h4 className="title">Peso</h4>
                <p className="text">{weight}kg</p>
              </div>
              <div className="status-box">
                <h4 className="title">Altura</h4>
                <p className="text">{height / 100}m</p>
              </div>
            </article>
            <article className="graphical-result">
              <span className="number-result">{limitIMC}</span>
              <span className={`circle-result circle-result--${roundIMC}`}></span>
            </article>
            {msgIMC()}
          </div>
          <div className="wrapper">
            <article className="result-infos">
              <h2 className="title">Tabela informativa IMC</h2>
              <div className="info">
                <span className="info-icon bg-blue-strong"></span>
                <p className={`info-description text ${roundIMC < 16 ? "bg-blue-strong" : ""}`}>
                  Extremamente abaixo
                  <span className="text"> ﹤16 </span>
                </p>
              </div>
              <div className="info">
                <span className="info-icon bg-blue-medium"></span>
                <p className={`info-description text ${roundIMC == 16 ? "bg-blue-medium" : ""}`}>
                  Muito abaixo
                  <span className="text">16.0-16.9</span>
                </p>
              </div>
              <div className="info">
                <span className="info-icon bg-blue-soft"></span>
                <p className={`info-description text ${roundIMC == 17 ? "bg-blue-soft" : ""}`}>
                  Abaixo
                  <span className="text">17.0-17.9</span>
                </p>
              </div>
              <div className="info">
                <span className="info-icon bg-green"></span>
                <p className={`info-description text ${roundIMC > 17 && roundIMC <= 24 ? "bg-green" : ""}`}>
                  Saudável
                  <span className="text">18.0-24.9</span>
                </p>
              </div>
              <div className="info">
                <span className="info-icon bg-yellow"></span>
                <p className={`info-description text ${roundIMC > 24 && roundIMC <= 29 ? "bg-yellow" : ""}`}>
                  Excesso
                  <span className="text">25.0-29.9</span>
                </p>
              </div>
              <div className="info">
                <span className="info-icon bg-orange"></span>
                <p className={`info-description text ${roundIMC > 29 && roundIMC <= 34 ? "bg-orange" : ""}`}>
                  Obesidade Grau I
                  <span className="text">30.0-34.9</span>
                </p>
              </div>
              <div className="info">
                <span className="info-icon bg-red-medium"></span>
                <p className={`info-description text ${roundIMC > 34 && roundIMC <= 39 ? "bg-red-medium" : ""}`}>
                  Obesidade Grau II
                  <span className="text">35.0-39.9</span>
                </p>
              </div>
              <div className="info">
                <span className="info-icon bg-red-strong"></span>
                <p className={`info-description text ${roundIMC > 39 ? "bg-red-strong" : ""}`}>
                  Obesidade Grau III
                  <span className="text"> ﹥39.9 </span>
                </p>
              </div>
            </article>
          </div>
        </section>
      )}
    </div >
  )
}

export default App
