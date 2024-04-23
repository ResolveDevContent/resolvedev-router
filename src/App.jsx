import './App.css'
import { lazy, Suspense } from 'react';
import { Router } from './components/Router';
import Page404 from './pages/Page404';
import { Route } from './components/Route';

const LazyHomePage = lazy(() => import('./pages/Inicio.jsx'))
const LazyAboutPage = lazy(() => import('./pages/SobreNosotros.jsx'))

const appRoutes = [
  {
    path: '/about/:lang',
    component: LazyAboutPage
  },
]

function App() {
  
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='a don wanna sleep' />
          <Route path='/' component={LazyHomePage} />
          <Route path='/about' component={LazyAboutPage} />
        </Router>      
      </Suspense>
    </main>
  )
}

export default App
