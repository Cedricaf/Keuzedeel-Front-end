import React from "react";
import './scss/style.scss';
import logo from "./img/andreas.webp";
import Image1 from "./img/48-5000x3333.webp";
import image2 from "./img/61-3264x2448.webp";
import image3 from "./img/74-4288x2848.webp";


// Import de CSS-bestanden voor styling

function Navigation() {
  return (

    <nav className="navigation">
      <div className="logo">
        <img
          src={logo}
          alt="logo gemeente Amsterdam"
        />
      </div>
      <ul>
        <li className="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Mensen</a>
        </li>
        <li>
          <a href="#">Expertise</a>
        </li>
        <li>
          <a href="#">Opdrachten/Projecten</a>
        </li>
        <li>
          <a href="#">Publicaties</a>
        </li>
      </ul>
    </nav>
  );
}

function Hero(){
  return (
    <section className="hero">
        <img className="hero-image" src={Image1} alt="Foto van laptop op tafel" />
        <button className="action-button">Onze opdrachten en Projecten</button>
      </section>

  )
}


function Information1(){
  return (
    <section className="information">
        <div className="leftside">
          <h1>Het Projectmanagementbureau</h1>
          <p>
            Bij het Projectmanagementbureau verzorgen vakmensen het project-, programma- en procesmanagement in de stad. We doen dat voor sociale, fysieke en economische projecten en programma’s. Daarnaast ontwikkelen wij samen met opdrachtgevers en maatschappelijke partners nieuwe kennis en werkwijzen die passen bij de vraagstukken van vandaag en morgen. Onze opdrachtgevers zijn: stad, stadsdelen, wijken, buurten en de regio.
          </p>
          <button className="read-more-button">Lees meer</button>
        </div>
        <div className="rightside">
          <img src={image2} alt="zwart-wit foto van een stad van bovenaf" />
        </div>
      </section>
      

      
  )
}

function Information2(){
  return (
    <section className="information">
      <div className="rightside">
          <img src={image3} alt="Roeiboot op zee met uitzicht op de brug van San Fransisco" />
        </div>
        <div className="leftside">
          <h1>Het Projectmanagementbureau</h1>
          <p>
            Bij het Projectmanagementbureau verzorgen vakmensen het project-, programma- en procesmanagement in de stad. We doen dat voor sociale, fysieke en economische projecten en programma’s. Daarnaast ontwikkelen wij samen met opdrachtgevers en maatschappelijke partners nieuwe kennis en werkwijzen die passen bij de vraagstukken van vandaag en morgen. Onze opdrachtgevers zijn: stad, stadsdelen, wijken, buurten en de regio.
          </p>
          <button className="read-more-button">Lees meer</button>
        </div>
        
      </section>
      

      
  )
}

function Footer() {
  return (
    <footer>
      <p>PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
      <p>© <span id="year">2025</span> All Rights Reserved.</p>
      <div className="social-icons">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>

  )
}

function App() {
  return (
    <main>
      <header><Navigation /></header>
      
      <Hero/>
      <Information1/>
      <Information2/>
      

      <Footer />
    </main>

  );
}

export default App;
