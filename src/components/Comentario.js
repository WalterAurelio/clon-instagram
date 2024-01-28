import React from 'react';
import { IoIosClose } from "react-icons/io";

function Comentario({ textoComentario, id, eliminarComentario }) {

  return (
    <article className='contenedor-comentario'>
      
      <p className='texto-comentario'>
        <a href='#' className='usuario-comentario'>woltergg22</a> {textoComentario}
      </p>
      
      <div 
        className='eliminar-comentario'
        onClick={() => eliminarComentario(id)}
      >
        <IoIosClose className='icono-eliminar-comentario' />
      </div>
    </article>
  );
}

export default Comentario;