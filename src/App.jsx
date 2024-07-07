import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';

function App() {
  

  return (
    <Router>
      <div>
        <NavMenu />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/service' Component={Services}></Route>
          <Route path='/portfolio' Component={Portfolio}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/contact' Component={Contact}></Route>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
