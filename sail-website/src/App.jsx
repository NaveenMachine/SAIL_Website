import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero_Experimental from './components/Hero_Experimental'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const links = ['Research', 'People', 'News', 'Events', 'About']; 

  return (
    <>
      <NavBar links={links}/>
    </>
  )
}

export default App
