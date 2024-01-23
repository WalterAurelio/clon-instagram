import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function SliderImagenes({ persona }) {
  
  const [numDeFoto, setNumDeFoto] = useState(0);
  const [claseIzq, setClaseIzq] = useState('oculto');
  const [claseDer, setClaseDer] = useState('');
  const [classIndicador, setClassIndicador] = useState('activo');

  function handleClick(num) {
    if (numDeFoto + num > -1 && numDeFoto + num < persona.publicacion.length) {
      const img = document.querySelector(`.img${numDeFoto + num}`);
      img.scrollIntoView({
        behavior: 'smooth'
      });
      setNumDeFoto(numDeFoto + num);
      ocultarSi(num);
    }
  }

  function ocultarSi(num) {
    if (numDeFoto + (2 * num) == -1) {
      setClaseIzq('oculto');
    } else if (numDeFoto + (2 * num) == persona.publicacion.length) {
      setClaseDer('oculto');
    } else {
      setClaseDer('');
      setClaseIzq('');
    }
  }

  return (
    <div className='slider'>
      <div className='contenedor-imagenes'>
        {
          persona.publicacion.map(foto => <img id={persona.publicacion.indexOf(foto)} key={persona.publicacion.indexOf(foto)} className={`img${persona.publicacion.indexOf(foto)}`} src={foto} alt='foto' />)
        }
      </div>

      <IoIosArrowDropleftCircle className={`boton-slider izquierda ${claseIzq}`} onClick={() => handleClick(-1)} />
      <IoIosArrowDroprightCircle className={`boton-slider derecha ${claseDer}`} onClick={() => handleClick(1)} />

      <div className='contenedor-indicadores'>
        {
          persona.publicacion.map(foto => 
            <div id={persona.publicacion.indexOf(foto)} className={`indicador ${numDeFoto == persona.publicacion.indexOf(foto) ? 'activo' : ''}`}></div>)
        }
      </div>
    </div>
  );
}

export default SliderImagenes;