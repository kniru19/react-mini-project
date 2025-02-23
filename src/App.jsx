import { useState } from 'react'
import Header from './components/header'
import Slider from './components/slider'
import AboutSec from './components/aboutsec'
import Service from './components/service'
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
       
      </div>
    
      

    </>
  )
}

export default App
