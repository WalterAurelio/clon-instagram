import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FormularioComentario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  function manejarEnvio(e) {
    e.preventDefault();
    const comentario = {
      id: uuidv4(),
      texto: input
    }
    props.onSubmit(comentario);
  }

  return (
    <form 
      className='formulario-comentario'
      onSubmit={manejarEnvio}
    >
      <input 
        className='input-comentario'
        type='text'
        placeholder='Agrega un comentario...'
        name='comentario'
        onChange={manejarCambio}
      />
      <button className='boton-comentario'>Publicar</button>
    </form>
  );
}

export default FormularioComentario;