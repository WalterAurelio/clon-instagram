import React from 'react';

function Comentario({ textoComentario, id, eliminarComentario }) {


  return (
    <article className='contenedor-comentario'>
      <a href='#' className='usuario-comentario'>woltergg22</a>
      <p className='texto-comentario'>{textoComentario}</p>

      <p 
        className='eliminar-comentario'
        onClick={() => eliminarComentario(id)}
      >
        x
      </p>
    </article>
  );
}

export default Comentario;