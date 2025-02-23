import { useState } from 'react'
import Header from './components/header'
import Slider from './components/slider'
import AboutSec from './components/aboutsec'
import Service from './components/service'
import Quote from './components/quote'
import Contact from './components/contact'
import Client from './components/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
        <AboutSec />
        <Service />
        <Quote />
       <Contact />
       <Client />
      </div>
    
      

    </>
  )
}

export default App
