import React from 'react'
import Card from './Components/Card/Card'
import Header from './Components/Header/Header'
import OurWork from './Components/OurWork/OurWork'
import './App.css'
import Intro from './Components/Introduction/Intro'

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <OurWork />
      <Card />
    </div>
  )
}

export default App