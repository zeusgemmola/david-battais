import React, { useEffect, useState } from "react";
import "./AppBar.css";
import "./App.css";
import { Amount } from "./Amount.js";
import { Result } from "./Result.js";
import { From } from "./From.js";
import { To } from "./To.js";
import Spinner from "./components/Spinner/index.js";

export const Container = () => {
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [montant, setMontant] = useState(0);
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.M.updateTextFields();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h3>Convertisseur</h3>
        <div className="col s8">
          <div className="row">
            <From setCurrencyFrom={setCurrencyFrom} />
            <To setCurrencyTo={setCurrencyTo} />
          </div>
          <div className="row">
            <Amount
              montant={montant}
              setMontant={setMontant}
              currencyTo={currencyTo}
              currencyFrom={currencyFrom}
              setResult={setResult}
              setIsLoading={setIsLoading}
            />
            {isLoading ? <Spinner /> : <Result result={result} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export const test = () => {
  return (
    <>
      <p>chibre</p>
    </>
  );
};
