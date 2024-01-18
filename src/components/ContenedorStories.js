import React from 'react';
import Story from './Story';
import { aurelio, lujan, ezequiel, timdessaint, araceli, valentina, valeria, facundo } from '../objects/Personas';

function ContenedorStories() {

  const scrollRight = () => {
    const contenedor = document.querySelector('.stories');
    contenedor.scrollBy({
      left: 325,
      behavior: 'smooth'
    });
  }

  const scrollLeft = () => {
    const contenedor = document.querySelector('.stories');
    contenedor.scrollBy({
      left: -325,
      behavior: 'smooth'
    });
  }

  return(
    <div className='contenedor-stories'>      
      <div className='stories'>
        <Story persona={aurelio} />
        <Story persona={lujan} />
        <Story persona={ezequiel} />
        <Story persona={timdessaint} />
        <Story persona={araceli} />
        <Story persona={valentina} />
        <Story persona={valeria} />
        <Story persona={facundo} />
        <Story persona={aurelio} />
        <Story persona={lujan} />
        <Story persona={ezequiel} />
        <Story persona={timdessaint} />
        <Story persona={araceli} />
        <Story persona={valentina} />
        <Story persona={valeria} />
        <Story persona={facundo} />
      </div>

      <div className='botones'>
        <button className='boton boton-derecha' onClick={scrollRight}>&gt;</button>
        <button className='boton boton-izquierda' onClick={scrollLeft}>&lt;</button>
      </div>
    </div>
  );
}

export default ContenedorStories;