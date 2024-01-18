import ContenedorStories from './components/ContenedorStories';
import SliderImagenes from './components/SliderImagenes';
import { aurelio, lujan, ezequiel, timdessaint, araceli, valentina, valeria, facundo } from './objects/Personas';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='contenedor-header'>
          <h1>Instagram</h1>

          <nav className='contenedor-enlaces'>
            <a className='enlace' href='#'>Inicio</a>
            <a className='enlace' href='#'>Buscar</a>
            <a className='enlace' href='#'>Explorar</a>
            <a className='enlace' href='#'>Reels</a>
            <a className='enlace' href='#'>Mensajes</a>
            <a className='enlace' href='#'>Notificaciones</a>
            <a className='enlace' href='#'>Crear</a>
            <a className='enlace' href='#'>Perfil</a>
            <a className='enlace' href='#'>Threads</a>
            <a className='enlace' href='#'>Más</a>
          </nav>
        </div>
      </header>

      <main className='main'>
        <ContenedorStories />

        <SliderImagenes persona={aurelio} />
      </main>
      
      <aside>
        <div className='contenedor-main'>
        </div>
      </aside>
    </div>
  );
}

export default App;