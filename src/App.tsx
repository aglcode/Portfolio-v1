
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Home />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App