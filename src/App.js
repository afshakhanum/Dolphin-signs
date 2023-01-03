import React from 'react'
import Header from './Components/Header/Header'
import OurWork from './Components/OurWork/OurWork'
import './App.css'
import Intro from './Components/Introduction/Intro'
import Content from './Components/Content/Content'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Intro />
      <OurWork />
      <Content />
    </div>
  )
}

export default App