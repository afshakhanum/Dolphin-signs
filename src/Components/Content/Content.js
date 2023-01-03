import React from 'react'
import Card from '../Card/Card'
import './Content.css'

const Content = () => {
  return (
    <div className='content-main'>
      <div className='content-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Content