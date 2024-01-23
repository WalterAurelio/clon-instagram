import React from 'react';

function Story({ id, persona }) {

  const nombreUsuario = () => {
    let nombreUsuario = persona.usuario;
    if (nombreUsuario.length > 10) {
      nombreUsuario = `${nombreUsuario.slice(0, 8)}...`;
    }
    return nombreUsuario;
  }

  return (
    <div id={id} className='contenedor-story'>
      <a href='#'>
        <img
          className='imagen-story'
          src={persona.imagen}
          alt={`Foto de ${persona.usuario}`}
        />
      </a>
      <a href='#' className='usuario-story'>{nombreUsuario()}</a>
    </div>
  );
}

export default Story;