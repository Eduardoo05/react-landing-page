import { useState } from 'react';
import './Navbar.css'; 

import './Navbar.css'; // Archivo de estilos para el navbar
export const Navbar = () => {

  const opcionUno = 'OPCION 1'
  const opcionDos = 'OPCION 2'
  const opcionTres = 'OPCION 3'
  const opcionCuatro = 'OPCION 4'


  const [abierto, setAbierto] = useState(false);
  const [ocultar, setOcultar] = useState(false)

  const abrirCerrar = () => {
    setAbierto(!abierto);
  };

  const ocultarMostrar = () =>{
    setOcultar(!ocultar)
  }

  const handleMenu = () =>{
    abrirCerrar()
    ocultarMostrar()
  }

  return (
    <>
      
      {/* =========== Barra superior de navegación ============= */}

      <div className="navBar">

        <img src="https://kodigo.org/wp-content/uploads/2021/01/logo-kodigo-50.png" alt="kodigoLogo" />
        <div className="navButtons">
          <button>{opcionUno}</button>
          <button>{opcionDos}</button>
          <button>{opcionTres}</button>
          <button>{opcionCuatro}</button>
        </div>
        <button className="aplica">APLICA</button>

      </div>






      {/* =========== Icono para el menu hamburguesa ============= */}

      <div className='menuBurger'>

        <div className={`icon ${ocultar ? 'ocultando' : ''}`} onClick={handleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>

        <div className={`menu ${abierto ? 'mover-derecha' : ''}`}>

          <div className='menuNav'>

            <img src="https://kodigo.org/wp-content/uploads/2021/01/KODIGO_LOGO-FINAL-AF_Mesa-de-trabajo-1-copia.png" alt="kodigoLogo" />
            <ul>
              <li>{opcionUno}</li>
              <li>{opcionDos}</li>
              <li>{opcionTres}</li>
              <li>{opcionCuatro}</li>
            </ul>

          </div> 

          <div className="cerrar" onClick={handleMenu}>
            <div className={`line lineOne ${!ocultar ? 'ocultando' : ''}`}></div>
            <div className={`line lineTwo ${!ocultar ? 'ocultando' : ''}`}></div>
          </div>

        </div>

      </div>

    </>
  )
}
