import React from "react";
import "./404.css";
import kirbySad from "./ressource/kirby_sad.png";
export const Error404 = () => (
  <div class="kirby">
    <p>Erreur 404 :(</p>
    <img src={kirbySad} alt="kirby triste" />
  </div>
);
