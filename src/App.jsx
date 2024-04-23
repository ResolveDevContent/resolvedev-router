import { useEffect, useState } from 'react';
import './App.css'
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import { EVENTS } from './consts';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === "/" && <Inicio />}
      {currentPath === "/about" && <SobreNosotros />}
    </main>
  )
}

export default App
