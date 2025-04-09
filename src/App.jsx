import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
 const location = useLocation();
  useEffect(() => {
       Aos.init({
            duration: 1800,
            once: true
       })
  }, [])

  useEffect(() => {
        window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about-us' element={<About />} />
               <Route path='/products' element={<Products />} />
               <Route path="/contact-us" element={<Contact />} />
    </Routes>
  )
}

export default App
