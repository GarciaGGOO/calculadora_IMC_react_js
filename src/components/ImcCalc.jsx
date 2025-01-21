import PropTypes from "prop-types";
import { useState } from "react";

import Button from "./Button";

import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault(); //para impedir o comportamento padrão do evento. nesse caso ele vai limpar sem recarregar a pagina
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g,"")
  }

  const HandleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setHeight(updateValue);
  }

  const HandleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setWeight(updateValue);
  }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => HandleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
              onChange={(e) => HandleWeightChange(e)}
              value={weight}
            />
          </div>
          <div className="action-control">
            <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
            <Button id="clear-btn" text="Limpar" action={clearForm} />
          </div>
        </div>
      </form>
    </div>
  );
};

ImcCalc.propTypes = {
  calcImc: PropTypes.func.isRequired,
};

export default ImcCalc;
