import React, { useState } from 'react';
import Story from './Story';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function ContenedorStories({ persona }) {

  const storiesAmigos = persona.amigos;
  const [nroStory, setNroStory] = useState(3.5);
  const [classIzq, setClassIzq] = useState('oculto');
  const [classDer, setClassDer] = useState('');

  function ocultarSi(num) {
    if (nroStory + (8 * num) >= storiesAmigos.length - 1) {
      setClassDer('oculto');
    } else if (nroStory + (8 * num) <= 0) {
      setClassIzq('oculto');
    } else {
      setClassDer('');
      setClassIzq('');
    }
  }

  function limiteQueInteresa(num) {
    return Math.max((storiesAmigos.length - 1) * num, 0);
  }

  function posibleCentro(num) {
    return Math.max((storiesAmigos.length - 1) * num - 3.5, 3.5);
  }

  const hacerScroll = (num) => {
    const story = document.getElementById(`${num > 0 ? Math.min(limiteQueInteresa(num), nroStory + (num * 7.5)) : Math.max(limiteQueInteresa(num), nroStory + (num * 7.5))}`);
    story.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    setNroStory((num > 0 ? Math.min(posibleCentro(num), nroStory + (num * 4)) : Math.max(posibleCentro(num), nroStory + (num * 4))));
    ocultarSi(num);
  }

  return(
    <div className='contenedor-stories'>
      <div className='stories'>
        {
          storiesAmigos.map(persona => 
            <Story
              key={storiesAmigos.indexOf(persona)}
              id={storiesAmigos.indexOf(persona)}
              persona={persona} />
          )
        }
      </div>
      
      <IoIosArrowDropleftCircle className={`boton-story izquierda ${classIzq}`} onClick={() => hacerScroll(-1)} />
      <IoIosArrowDroprightCircle className={`boton-story derecha ${classDer}`} onClick={() => hacerScroll(1)} />
    </div>
  );
}

export default ContenedorStories;