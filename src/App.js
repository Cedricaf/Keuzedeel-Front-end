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


function Footer(){
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
      <section className="hero"></section>
      <section className="information">
        <div className="leftside"></div>
        <div className="rightside">
          
        </div>
      </section>
      <Footer/>
    </main>
    
  );
}

export default App;
