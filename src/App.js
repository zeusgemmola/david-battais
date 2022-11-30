import "./AppBar.css";
import { Routes, Route } from "react-router-dom";
import logo from "./AppBar.logo.svg";
import "./App.css";
import { Container } from "./Container.js";
import { Error404 } from "./404.js";

const App = () => (
  <div className="App">
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  </div>
);

export default App;
