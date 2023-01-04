import React from 'react'
import Cards from './Cards'
import './Clients.css'

const Clients = () => {
    return (
        <div className='content-main'>
        <h1>Our Clients</h1>
        <div className='content-container'>
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    )
}

export default Clients