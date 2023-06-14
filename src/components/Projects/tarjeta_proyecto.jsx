import React from 'react'
import './tarjeta_proyecto.css'

const tarjeta_proyecto = ({nombre_proyecto, desc, img, prop}) => {
  return (
    <div className='tarjeta-proyecto'>
        <div className="contenedor_proyecto">
            <h2>{nombre_proyecto}</h2>
            <p>{desc}</p>
        </div>
        
        <img className="imagen_tarjeta_m" src={img} prop={prop}></img>
    </div>
  )
}

export default tarjeta_proyecto
