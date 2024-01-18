import React, { useState, useTransition } from 'react';

function SliderImagenes({ persona }) {
  
  const [numDeFoto, setNumDeFoto] = useState(0);

  const [estadoDisabled, setEstadoDisabled] = useState(true);

  function deslizarIzquierda() {
    if (numDeFoto - 1 > -1) {
      setNumDeFoto(numDeFoto - 1);
      const img = document.querySelector(`.img${numDeFoto - 1}`);
      img.scrollIntoView({
        behavior: 'smooth'
      });

      const botonDerecha = document.querySelector('.derecha');
      botonDerecha.removeAttribute('disabled');
    }
    
    if (numDeFoto - 2 <= -1) {
      const botonIzquierda = document.querySelector('.izquierda');
      botonIzquierda.setAttribute('disabled', '');
    }
  }

  function deslizarDerecha() {
    if (numDeFoto + 1 < persona.publicacion.length) {
      setNumDeFoto(numDeFoto + 1);
      const img = document.querySelector(`.img${numDeFoto + 1}`);
      img.scrollIntoView({
        behavior: 'smooth'
      });

      setEstadoDisabled(false);
      const botonIzquierda = document.querySelector('.izquierda');
      botonIzquierda.removeAttribute('disabled');
    }
    
    
    if (numDeFoto + 2 >= persona.publicacion.length) {
      const botonDerecha = document.querySelector('.derecha');
      botonDerecha.setAttribute('disabled', '')
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
        <button disabled={estadoDisabled} className='boton izquierda' onClick={deslizarIzquierda}>I</button>
        <button className='boton derecha' onClick={deslizarDerecha}>D</button>
      </div>
    </div>
  );
}

export default SliderImagenes;