import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleOverlayClick = () => {
    setMenuVisible(false);
  };

  return (
    <div className="navbar">
      {!menuVisible && (
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
      {menuVisible && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}
      <div className={`menu ${menuVisible ? 'show-menu' : ''}`}>
        {/* Aquí coloca tu contenido de menú */}
        <ul>
          <li>Elemento de menú 1</li>
          <li>Elemento de menú 2</li>
          <li>Elemento de menú 3</li>
        </ul>
      </div>
    </div>
  );
}

