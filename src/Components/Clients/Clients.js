import React from 'react'
import './Clients.css'
import Laddoos from '../Images/Laddoos.jpg'


const Clients = () => {
  return (
    <div className='client-main'>
      <h1>Our Clients</h1>
      <div className='client-container'>
        <div className='client-card'>
          <img className='client-img' src={Laddoos} alt='laddoo'/>
          <div className='card-overlay'>
            <p className='text'>dddd</p>
          </div>
        </div>
        <div className='client-card'>
          {/* <img /> */}
          <div className='card-overlay'>
            <p className='text'>dddd</p>
          </div>
        </div>
        <div className='client-card'>
          {/* <img /> */}
          <div className='card-overlay'>
            <p className='text'>dddd</p>
          </div>
        </div>
        <div className='client-card'>
          {/* <img /> */}
          <div className='card-overlay'>
            <p className='text'>dddd</p>
          </div>
        </div>
        <div className='client-card'>
          {/* <img /> */}
          <div className='card-overlay'>
            <p className='text'>dddd</p>
          </div>
        </div>
        <div className='client-card'>
          {/* <img /> */}
          <div className='card-overlay'>
            <p className='text'>dddd</p>
          </div>
        </div>
        <div className='client-card'>
          {/* <img /> */}
          <div className='card-overlay'>
            <p className='text'>dddd</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Clients