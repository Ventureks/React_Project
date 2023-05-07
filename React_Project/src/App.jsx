import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Myphoto from './zdjecia/photo.jpg'
import Myphoto1 from './zdjecia/photo1.jpg'
import logoxkom from './zdjecia/logo_xkom.png'
import logoprosto from './zdjecia/logo_prosto.png'
import logospider from './zdjecia/logo_spider.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dawid Grobela</h1>
      <h2>Nr Albumu: 114912</h2>
      <img src={Myphoto} className="photo" alt="MyPhoto" />
      <img src={Myphoto1} className="photo" alt="MyPhoto" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          licznik IQ {count}
        </button> <br /> <br />
        <h3>Spis Sklepów</h3>
        <div id="sklep">
        <img src={logoxkom} className='logo' alt="logoxkom" /> <br /> 
        <button><a href="https://www.x-kom.pl/">Sklep X-KOM</a></button> <br /> <br />

        <img src={logoprosto} className='logo' alt="logoprosto" /> <br />
        <button><a href="https://prosto.com/">Sklep PROSTO</a></button> <br /> <br />

        <img src={logospider} className='logo' alt="logospider" /> <br />
        <button><a href="https://spidersweb.pl/">Blog Technologiczny Spider's Web</a></button> <br /> <br />
        </div>
        <h1>Login Form</h1>
        <form>
          Login: <input type="text"></input> <br /> <br />
          Password: <input type="password"></input> <br /> <br />
          <button><a href="#">Sign In!</a></button>        
        </form>
        <p>
          <h3>Dawid Grobela © 2023</h3>
        </p>
      </div>
    </>
  )
}

export default App
