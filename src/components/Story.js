import React from 'react';

function Story(props) {

  const nombreUsuario = () => {
    let nombreUsuario = props.persona.usuario;
    if (nombreUsuario.length > 10) {
      nombreUsuario = `${nombreUsuario.slice(0, 8)}...`;
    }
    return nombreUsuario;
  }

  return (
    <a className='contenedor-story' href='#'>
      <img
        className='imagen-story'
        src={props.persona.imagen}
        alt={`Foto de ${props.persona.usuario}`}
      />
      {nombreUsuario()}
    </a>
  );
}

export default Story;