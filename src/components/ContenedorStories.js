import React from 'react';
import Story from './Story';
import { aurelio, lujan, ezequiel, timdessaint, araceli, valentina, valeria, facundo } from '../objects/Personas';

function ContenedorStories() {
  const scrollRight = () => {
    const contenedor = document.querySelector('.contenedor-stories');
    contenedor.scrollBy(304, 0);
  }

  const scrollLeft = () => {
    const contenedor = document.querySelector('.contenedor-stories');
    contenedor.scrollBy(-304, 0);
  }

  return(
    <div className='contenedor-stories-gen'>
      <div className='aux'>
        <button className='scrollD' onClick={scrollRight}>D</button>
        <button className='scrollI' onClick={scrollLeft}>I</button>
      </div>
      <div className='contenedor-stories'>
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
    </div>
  );
}

export default ContenedorStories;