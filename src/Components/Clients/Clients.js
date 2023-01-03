import React from 'react'
import Card from '../Card/Card'
import './Clients.css'

const Clients = () => {
    return (
        <div className='content-main'>
        <h1>Our Clients</h1>
        <div className='content-container'>
          <Card className='client-container'/>
          <Card className='client-container'/>
          <Card className='client-container'/>
        </div>
      </div>
    )
}

export default Clients