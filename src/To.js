import React from "react";
import "./AppBar.css";
import "./App.css";

const choice = ["EUR", "CHF", "GBP", "USD"];

export const To = (props) => {
  const changeTo = (event) => props.setCurrencyTo(event.target.value);
  return (
    <>
      <div className="col s6">
        <label>To</label>
        <select
          defaultValue="EUR"
          className="browser-default"
          name="outputDevises"
          id="outputDevises"
          onChange={changeTo}
        >
          {choice.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
