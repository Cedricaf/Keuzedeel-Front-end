import React from "react";
import './scss/style.scss';
import logo from "./img/andreas.webp";
import Image1 from "./img/48-5000x3333.webp";
import image2 from "./img/61-3264x2448.webp";
import image3 from "./img/74-4288x2848.webp";




function Navigation() {
  return (

    <nav className="navigation">
  <div className="logo">
    <img src={logo} alt="logo gemeente Amsterdam" />
  </div>
  <ul className="menu">
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

function Hero() {
  return (
    <section className="hero">
      <img className="hero-image" src={Image1} alt="Foto van laptop op tafel" />
      <button className="action-button">Onze opdrachten en Projecten</button>
    </section>

  )
}


function Information1() {
  return (
    <section className="information">
      <div className="leftside">
        <h1>Het Projectmanagementbureau</h1>
        <p>
        Bij het Projectmanagementbureau verzorgen vakmensen het project-, programma- en procesmanagement in de stad. We doen dat voor sociale, fysieke en economische projecten en programma’s. Daarnaast ontwikkelen wij samen met opdrachtgevers en maatschappelijke partners nieuwe kennis en werkwijzen die passen bij de vraagstukken van vandaag en morgen. Onze opdrachtgevers zijn: stad, stadsdelen, wijken, buurten en de regio.

Het Projectmanagementbureau is een open, lerende en flexibele organisatie met ruim 500 medewerkers. Er werken projectmanagers, bouwmanagers, adviseurs maatschappelijk vastgoed, planningsadviseurs en topadviseurs, die in opdracht de functie van manager, regisseur en project- of programmadirecteur vervullen. Met talent als basis en diversiteit als kracht werken we samen aan de ontwikkeling en de toekomst van Amsterdam.
        </p>
        
      </div>
      <div className="rightside">
        <img src={image2} alt="zwart-wit foto van een stad van bovenaf" />
      </div>
    </section>



  )
}

function Information2() {
  return (
    <section className="information">
      <div className="rightside">
        <img src={image3} alt="Roeiboot op zee met uitzicht op de brug van San Fransisco" />
      </div>
      <div className="leftside">
        <h1>Werken bij Projectmanagementbureau</h1>
        <p>
        Naast ca 500 medewerkers in vaste dienst heeft het Projectmanagementbureau een flexibele schil om pieken in het werk goed te kunnen opvangen. We huren regelmatig junior projectmanagers en managementondersteuning in via uitzendbureaus. De gemeente Amsterdam doet zaken met drie uitzendbureaus: Randstad, Tempo Team en Olympia. Heb je interesse? Neem dan vooral een kijkje op hun websites.
        </p>
        
      </div>

    </section>


  )
}

function Information3() {
  return (
    <section className="information">
      
      <div className="info-content">
        <h1>Contact</h1>
        <p>
        Bezoekadres
Weesperstraat 432
1018 DN Amsterdam

Postadres
Postbus 1269
1000 BG Amsterdam

E: pmb.matchingenaccountmanagement@amsterdam.nl
        </p>
        
      </div>

    </section>


  )
}

function Articles() {
  return (
    <section className="articles">
      <div className="article">
        <h2>Programmamanagement</h2>
        <p>Veranderopgave, strategiewijziging of complexe beleidsopgave? Onze programmanagers helpen u doelgericht bij de realisatie of uitvoering daarvan.</p>
        <button>Lees Meer</button>
      </div>
      <div className="article">
        <h2>Procesmanagement </h2>
        <p>Een complex bestuurlijk proces met strijdige belangen? Onze procesmanagers organiseren en begeleiden de interactie tussen organisaties/partijen voor een goede samenwerking.</p>
        <button>Lees Meer</button>
      </div>
      <div className="article">
        <h2>Bouwmanagement</h2>
        <p>(Her)huisvesting, kantoren, scholen en sportcomplexen: onze bouwmanagers kennen de specifieke Amsterdamse situatie en regels en begeleiden het gehele proces van uw (maatschappelijk) vastgoed.</p>
        <button>Lees Meer</button>
      </div>
      
    </section>
  );
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

      <Hero />
      <Information1 />
      <Information2 />
      <Articles/>
      <Information3/>
      <Footer />
    </main>

  );
}

export default App;
