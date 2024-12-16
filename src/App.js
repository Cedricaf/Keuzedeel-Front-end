import React from "react";
import "./style.css"; // Import de CSS-bestanden voor styling

function Navigation() {
  return (
    
    <nav className="navigation">
      <div className="logo">
        <img
          src="GemeenteAmsterdam.svg"
          alt="logo gemeente Amsterdam"
        />
      </div>
      <ul>
        <li className="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Agenda</a>
        </li>
        <li>
          <a href="#">Organisatoren</a>
        </li>
        <li>
          <a href="#">Ondernemers</a>
        </li>
        <li>
          <a href="#">Bewoners</a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <main>
      <Navigation />
      <section className="hero"></section>
      <section className="information"></section>
    </main>
  );
}

export default App;
