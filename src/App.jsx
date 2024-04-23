import './App.css'
import { Router } from './components/Router';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Page404 from './pages/Page404';

function App() {
  return (
    <main>
      <Router routes={[]} defaultComponent={Page404}>
        <route path='a don wanna sleep' />
        <route path='/' component={Inicio} />
        <route path='/about' component={SobreNosotros} />
      </Router>      
    </main>
  )
}

export default App
