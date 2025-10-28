import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero_Experimental from './components/Hero_Experimental'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import People from './components/People'
import News from './components/News'
import Events from './components/Events'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)
  const links = ['Research', 'People', 'News', 'Events', 'About']; 

  return (
    <Router>
      <NavBar links={links}/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/research" element={<Hero />} />
        <Route path="/people" element={<People />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
