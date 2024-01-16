import logo from './logo.svg';
import Story from './components/Story';
import { aurelio, lujan, ezequiel, tim, araceli, valentina, valeria, luciana } from './objects/Personas';

function App() {
  return (
    <div className="App">
      <header>
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

      <main>
        <div className='contenedor-stories'>
          <Story persona={aurelio} />
          <Story persona={lujan} />
          <Story persona={ezequiel} />
          <Story persona={tim} />
          <Story persona={araceli} />
          <Story persona={valentina} />
          <Story persona={valeria} />
          <Story persona={luciana} />
        </div>
      </main>
      
      <aside>
        <div className='contenedor-main'>
        </div>
      </aside>
    </div>
  );
}

export default App;