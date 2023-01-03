import React from 'react'
import Header from './Components/Header/Header'
import OurWork from './Components/OurWork/OurWork'
import './App.css'
import Intro from './Components/Introduction/Intro'
import Content from './Components/Content/Content'
import Clients from './Components/Clients/Clients'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Intro />
      <OurWork />
      <Content />
      <Clients />
      <Footer />
    </div>
  )
}

export default App