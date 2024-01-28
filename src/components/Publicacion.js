import React, { useState } from 'react';
import SliderImagenes from './SliderImagenes';
import ListaComentarios from './ListaComentarios';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";

function Publicacion({ persona }) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div className='contenedor-publicacion'>
      <div className='publicacion'>
        <a href='#' className='contenedor-imagen'>
          <img
            className='imagen-usuario'
            src={persona.imagen}
            alt={`Foto de ${persona.usuario}`}
          />
        </a>

        <div className='contenedor-nombre-usuario'>
          <a href='#' className='nombre-usuario'><span>{persona.usuario}</span> • 1 h</a>
        </div>

        <SliderImagenes className='slider' persona={persona} />

        <div className='contenedor-iconos'>
          <div className='contenedor-reacciones'>
            <div className='icono-corazon'>
              <FaRegHeart className={ `icono corazon ${liked ? 'oculto' : ''}`} onClick={handleClick} />
              <FaHeart className={ `icono corazon filled ${liked ? '' : 'oculto'}`} onClick={handleClick} />
            </div>
            <RiChat3Line className='icono' />
            <PiPaperPlaneTiltBold className='icono' />
          </div>
          <div className='contenedor-bookmark'>
            <FiBookmark className='icono' />
          </div>
        </div>

        <a href='#' className='contador-likes'><span>{Math.round(Math.random() * 1000)}</span> Me gusta</a>
        
        <p className='leyenda'>
          <a href='#'>{persona.usuario}</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus tempus eros eu molestie mattis. Curabitur imperdiet neque ut ex finibus, eu malesuada
          ante euismod.
        </p>

        <ListaComentarios />
      </div>
    </div>
  );
}

export default Publicacion;