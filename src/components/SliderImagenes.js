import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function SliderImagenes({ persona }) {

  const publicacionId = persona.publicacion.id;
  const publicacionFotos = persona.publicacion.fotos;
  const [numDeFoto, setNumDeFoto] = useState(0);
  const [claseIzq, setClaseIzq] = useState('oculto');
  const [claseDer, setClaseDer] = useState(publicacionFotos.length > 1 ? '' : 'oculto');

  function handleClick(num) {
    if (numDeFoto + num > -1 && numDeFoto + num < publicacionFotos.length) {
      const img = document.getElementById(`${publicacionId}${numDeFoto + num}`);
      img.scrollIntoView({
        /* behavior: 'smooth', */
        block: 'nearest'
      });
      setNumDeFoto(numDeFoto + num);
      ocultarSi(num);
    }
  }

  function ocultarSi(num) {
    if (numDeFoto + (2 * num) == -1) {
      setClaseIzq('oculto');
      setClaseDer('');
    } else if (numDeFoto + (2 * num) == publicacionFotos.length) {
      setClaseIzq('');
      setClaseDer('oculto');
      console.log(numDeFoto + (2 * num));
    } else {
      setClaseIzq('');
      setClaseDer('');
    }
  }

  return (
    <div className='slider'>
      <div className='contenedor-imagenes'>
        {
          publicacionFotos.map(foto => 
            <img 
              id={`${publicacionId}${publicacionFotos.indexOf(foto)}`}
              key={publicacionFotos.indexOf(foto)} 
              src={foto} 
              alt='foto'
            />)
        }
      </div>

      <IoIosArrowDropleftCircle className={`boton-slider izquierda ${claseIzq}`} onClick={() => handleClick(-1)} />
      <IoIosArrowDroprightCircle className={`boton-slider derecha ${claseDer}`} onClick={() => handleClick(1)} />

      <div className={`contenedor-indicadores ${publicacionFotos.length > 1 ? '' : 'oculto'}`}>
        {
          publicacionFotos.map(foto =>
            <div className={`indicador ${numDeFoto == publicacionFotos.indexOf(foto) ? 'activo' : ''}`}></div>)
        }
      </div>
    </div>
  );
}

export default SliderImagenes;