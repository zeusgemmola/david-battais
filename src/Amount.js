import React, { useEffect, useState } from "react";
import "./AppBar.css";
import "./App.css";

export const Amount = (props) => {
  const numberToConvert = (event) => props.setMontant(event.target.value);
  const [valid, setValid] = useState(true);
  useEffect(() => {
    if (isNaN(props.montant)) {
      setValid(false);
    } else {
      const montant = Number(props.montant);
      if (montant !== 0) {
        setValid(true);
        const fetchCurrency = async () => {
          props.setIsLoading(true);
          const query = await fetch(
            "https://api.currencyapi.com/v3/latest?apikey=D2xpd3ApL5ASBrkjhvKqehAJTYlppLPdcAUaVPOl&base_currency=" +
              props.currencyFrom +
              "&currencies=" +
              props.currencyTo
          );
          const { data } = await query.json();
          props.setResult(data[props.currencyTo].value * montant);
          props.setIsLoading(false);
        };
        fetchCurrency();
      }
    }
  }, [props.montant, props.currencyTo, props.currencyFrom]);

  return (
    <div className="input-field col s12">
      <input
        id="amount"
        type="text"
        className={valid ? "valid" : "invalid"}
        placeholder="0"
        onChange={numberToConvert}
      />
      <span
        className="helper-text"
        data-error="Erreur"
        data-success="Valide"
      ></span>
      <label htmlFor="amount">Montant</label>
    </div>
  );
};
