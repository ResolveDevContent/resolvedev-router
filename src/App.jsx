import './App.css'
import { lazy, Suspense } from 'react';
import { Router } from './components/Router.jsx';
import Page404 from './pages/Page404.jsx';
import { Route } from './components/Route.jsx';
import { Link } from './components/Link.jsx';

const LazyHomePage = lazy(() => import('./pages/Inicio.jsx'))
const LazyAboutPage = lazy(() => import('./pages/SobreNosotros.jsx'))

const appRoutes = [
  {
    path: '/about/:lang',
    component: LazyAboutPage
  },
  {
    path: '/:lang',
    component: LazyHomePage
  },
]

function App() {
  
  return (
    <main className='container'>
      <header>
        <nav>
          <div>
            resolvedev-router
          </div>
          <ul>
            <li>
              <Link to="/es">Inicio</Link>
            </li>
            <li>
              <Link to="/about/es">Sobre nosotros</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' component={LazyHomePage} />
          <Route path='/about' component={LazyAboutPage} />
        </Router>      
      </Suspense>
    </main>
  )
}

export default App
