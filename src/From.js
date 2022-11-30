import React from "react";
import "./AppBar.css";
import "./App.css";

const choice = ["EUR", "CHF", "GBP", "USD"];

export const From = (props) => {
  const changeFrom = (event) => props.setCurrencyFrom(event.target.value);
  return (
    <>
      <div className="col s6">
        <label>From</label>
        <select
          defaultValue="EUR"
          className="browser-default"
          name="inputDevises"
          id="inputDevises"
          onChange={changeFrom}
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
