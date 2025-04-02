import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import About from './pages/About'

function App() {

  useEffect(() => {
       Aos.init({
            duration: 1800,
            once: true
       })
  }, [])

  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about-us' element={<About />} />
    </Routes>
  )
}

export default App
