import './navbar.css'
import React,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
import ListaLogo from '../Icons/elementos-de-lista.png'


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
          setIsMobile(window.matchMedia('(max-width: 479px)').matches);
        }
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Ejecutar la función una vez al inicio
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
      
      <div className="container_nav">
        <h1> Eduard Felipe Ortegón Correa</h1>
        {!isMobile && (
            <nav className="top_nav">
                <Link to="/about-me"> About Me </Link>
                <Link to="/project"> Projects </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="/contact"> Contact </Link>
            </nav>
        )}
        {isMobile && <div className="icon"><img className="" src={ListaLogo} alt="Es una lista en la cual se puede presionar, para seleccionar las posibles opciones de la pagina."></img></div>}
     
      </div>
      
    );
  }
  
  export default Navbar;