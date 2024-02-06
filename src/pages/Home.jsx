import {Navbar} from '../components/navBar/Navbar'
import './Home.css'

export const Home = () => {




  return (
    <>
      <Navbar></Navbar>

      <div className='heroBack'>
        <div className="hero">
          <div className='title'>
            <div className="heroText">
              <h1>INVIERTE EN </h1>
              <h1>TU</h1>
              <h1 className="futuro">FUTURO</h1>
            </div>
            <p>Nuestros bootcamps te dejan listo para una posicion MID / JR para una compañia tech.</p>
            <button>APLICA</button>
          </div>
          <div className='subHero'>
            <div className='title'>
              <h1 className='somos'>SOMOS</h1>
              <img src="https://kodigo.org/wp-content/uploads/2023/02/Asset-2.png" alt="kodigoLogo" />
            </div>
            <h1 className='secondh1'>UNA ACADÉMIA DE TECNOLOGÍA CREATIVA</h1>
            <p>
              Somos un emprendimiento social y nuestro objetivo es acelerar tu aprendizaje, empoderar tus habilidades y arrancar tu carrera como programador/a software. En Kodigo impartimos bootcamps diseñados a tus necesidades de aprendizaje y adaptados a lo requerido por empresas top en tecnología.
            </p>
          </div>
        </div>
      </div>
      <div className="bootcamp">
        <div>
          <h2>¿QUÉ ES UN</h2>
          <p>BOOTCAMP?</p>
        </div>
        <p className='bootcampInfo'>
          Los Bootcamps son cursos intensivos que dotan a los estudiantes de una excelente preparación para saltar al mercado laboral. Las características principales son las clases intensivas y un temario muy concentrado.
        </p>
      </div>
      <div className='nuestros'>
        <div className='tittle'>
          <h1>BOOTCAMPS KODIGO</h1>
          <p>conoce nuestra oferta académica</p>
        </div>
      </div>
    </>
  )
}
