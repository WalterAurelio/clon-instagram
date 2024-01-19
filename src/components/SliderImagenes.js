import React, { useState } from 'react';

function SliderImagenes({ persona }) {
  
  const [numDeFoto, setNumDeFoto] = useState(0);
  const [claseIzq, setClaseIzq] = useState('oculto');
  const [claseDer, setClaseDer] = useState('');

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

      <div className='contenedor-botones'>
        <button className={`izquierda ${claseIzq}`} onClick={() => handleClick(-1)}>&lt;</button>
        <button className={`derecha ${claseDer}`} onClick={() => handleClick(1)}>&gt;</button>
      </div>
    </div>
  );
}

export default SliderImagenes;