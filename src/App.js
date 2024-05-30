import React from 'react';
import './App.css';
import logo from './assets/image/logo.png';
import image0 from './assets/image/image0.jpeg';
import image1 from './assets/image/image1.jpeg';
import image2 from './assets/image/image2.jpeg';
import googleMapsIcon from './assets/icons/ubicacion.png';
import instagramIcon from './assets/icons/instagram.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-description">
          Bienvenidos a "Qué guay !"
        </p>
        <p className="App-description">
          Tu tienda de productos alimenticios artesanales italianos
        </p>
      </header>
      <hr className="App-separator" />
      <p className="App-description">
          Algunos de nuestros productos 
        </p>
      <div className="App-body">
        <div className="App-image">
        <h2>Biscotti amarena</h2>
          <p>Galletas de amarena, un postre típico napolitano...</p>
          <img src={image0} alt="Producto 1" />
          
        </div>
        <div className="App-image">
        <h2>Panino napoletano</h2>
          <p>Los bocadillos napolitanos son una comida callejera típica</p>
          <img src={image1} alt="Producto 2" />
         
        </div>
        <div className="App-image">
        <h2>Tarallo</h2>
          <p>El tarallo sugna e pepe, en dialecto napolitano "tarall" nzogna e pepe, es la merienda que acompaña, tradicionalmente a los paseos napolitanos</p>
          <img src={image2} alt="Producto 3" />
          
        </div>
      </div>
      <footer className="App-footer">
        <p className="App-description">Encuéntranos</p>
        <a href="https://www.google.es/maps/place/Pl.+de+la+Constituci%C3%B3n,+3,+10,+46920+Mislata,+Valencia/@39.4749126,-0.4200099,17z/data=!3m1!4b1!4m5!3m4!1s0xd604f9b56e8d6c3:0x5140a5a80a2940f6!8m2!3d39.4749085!4d-0.417435?hl=es&entry=ttu" target="_blank" rel="noopener noreferrer">
          <img src={googleMapsIcon} className="App-icon" alt="Ubicación" />
        </a>
        <a href="https://www.instagram.com/queguay_italia?igsh=Nm5peGZvbHlzNW5y" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} className="App-icon" alt="Instagram" />
        </a>
        
      </footer>
      <p className="App-copyright">&copy; 2024 Que guay!. All rights reserved.</p>
    </div>
  );
}

export default App;