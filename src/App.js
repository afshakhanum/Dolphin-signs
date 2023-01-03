import React from 'react'
import Header from './Components/Header/Header'
import OurWork from './Components/OurWork/OurWork'
import './App.css'
import Intro from './Components/Introduction/Intro'
import Content from './Components/Content/Content'
import Clients from './Components/Clients/Clients'

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <OurWork />
      <Content />
      <Clients />
    </div>
  )
}

export default App