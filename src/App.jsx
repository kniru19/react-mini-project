import { useState } from 'react'
import Header from './components/header'
import Slider from './components/slider'
import AboutSec from './components/aboutsec'
import Service from './components/service'
import Quote from './components/quote'
import Contact from './components/contact'
import Client from './components/client'
import Info from './components/info'
<<<<<<< HEAD
import Footer from './components/footer'
=======

>>>>>>> 79b2496d84e1a0938d3aec6ffe699f33cee25af6



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
<<<<<<< HEAD
        <Info />
        <Footer />        
=======
       <Info />
               
>>>>>>> 79b2496d84e1a0938d3aec6ffe699f33cee25af6


      </div>
    
      

    </>
  )
}

export default App
