import React, { useState } from 'react';
import Comentario from './Comentario';
import FormularioComentario from './FormularioComentario';


function ListaComentarios() {
  const [comentarios, setComentarios] = useState([]);

  function agregarComentario(comentario) {
    if (comentario.texto.trim()) {
      comentario.texto = comentario.texto.trim();
      const comentariosActualizados = [comentario, ...comentarios];
      setComentarios(comentariosActualizados);
    }
  }

  const eliminarComentario = id => {
    const comentariosActualizados = comentarios.filter(comentario => comentario.id !== id);
    setComentarios(comentariosActualizados);
  };

  return (
    <>
      <div className='contenedor-lista-comentarios'>
        {
          comentarios.map(comentario => 
            <Comentario
              id={comentario.id}
              key={comentario.id}
              textoComentario={comentario.texto}
              eliminarComentario={eliminarComentario}
            />
          )
        }
      </div>
      <FormularioComentario onSubmit={agregarComentario} />
    </>
  );
}

export default ListaComentarios;