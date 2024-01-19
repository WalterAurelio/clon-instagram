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
    <a id={id} className='usuario-story' href='#'>
      <img
        className='imagen-story'
        src={persona.imagen}
        alt={`Foto de ${persona.usuario}`}
      />
      {nombreUsuario()}
    </a>
  );
}

export default Story;