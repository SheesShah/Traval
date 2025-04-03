import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import CarCollection from './components/CarCollection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner/>
    <About/>
    <CarCollection/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
