import React from "react";
import './scss/style.scss';
import logo from "./img/andreas.webp";
import Image1 from "./img/image_1.jpg";
import image2 from "./img/Amsterdamse-grachten-van-bovenaf.webp";

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


function Footer() {
  return (
    <footer>
      <p>© <span id="year">2025</span> All Rights Reserved.</p>
      <div class="social-icons">
        <a href="#" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>

  )
}

function App() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <img className="hero-image" src={image2} alt="description" />
        <button className="action-button">Onze opdrachten en Projecten</button>
      </section>

      <section className="information">
        <div className="leftside">
          <h1>Het Projectmanagementbureau</h1>
          <p>
            Bij het Projectmanagementbureau verzorgen vakmensen het project-, programma- en procesmanagement in de stad. We doen dat voor sociale, fysieke en economische projecten en programma’s. Daarnaast ontwikkelen wij samen met opdrachtgevers en maatschappelijke partners nieuwe kennis en werkwijzen die passen bij de vraagstukken van vandaag en morgen. Onze opdrachtgevers zijn: stad, stadsdelen, wijken, buurten en de regio.
          </p>
          <button className="read-more-button">Lees meer</button>
        </div>
        <div className="rightside">
          <img src="https://www.emagine.org/wp-content/uploads/2023/08/Header1.jpg" alt="Placeholder" />
        </div>
      </section>

      <section className="information">
        <div className="rightside">
          <img src="https://www.emagine.org/wp-content/uploads/2023/08/Header1.jpg" alt="Placeholder" />
        </div>
        <div className="leftside">
          <h1>Werken bij het PBM</h1>
          <p>
            Naast ca 500 medewerkers in vaste dienst heeft het Projectmanagementbureau een flexibele schil om pieken in het werk goed te kunnen opvangen. We huren regelmatig junior projectmanagers en managementondersteuning in via uitzendbureaus. De gemeente Amsterdam doet zaken met drie uitzendbureaus: Randstad, Tempo Team en Olympia. Heb je interesse? Neem dan vooral een kijkje op hun websites.
          </p>
          <button className="read-more-button">Lees meer</button>
        </div>

      </section>

      <Footer />
    </main>

  );
}

export default App;
