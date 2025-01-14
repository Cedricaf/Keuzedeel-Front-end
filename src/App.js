import React from "react";
import './scss/style.scss';
// Import de CSS-bestanden voor styling

function Navigation() {
  return (

    <nav className="navigation">
      <div className="logo">
        <img
          src="https://www.amsterdam.nl/views/core/images/logos/andreas.svg"
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

      <div class="social-icons" bis_skin_checked="1">
        <p>© <span id="year">2025</span> Cedric Király. All Rights Reserved.</p>

      </div>
    </footer>
  )
}

function App() {
  return (
    <main>
      <Navigation />
      <section className="hero">
        <img className="hero-image" src="https://www.emagine.org/wp-content/uploads/2023/08/Header1.jpg" alt="description" />

      </section>
      <section className="information">
        <div className="leftside">
          <h1>Het Projectmanagementbureau van de gemeente Amsterdam</h1>
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
