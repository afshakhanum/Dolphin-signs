import React from 'react'
import './Form.css'
import Design from '../Images/design.png'

const Form = () => {
    return (
        <div className='form-main'>
            <div className='form-container'>
                <h2>Let's get back to your quote request!</h2>
                <div className='form-section'>
                    <div className='input-section'>
                        <input className='form-input' type="text" placeholder="Full name" /><br></br><br></br>
                        <input className='form-input' type="text" placeholder="Email" /><br></br><br></br>
                        <input className='form-input' type="text" placeholder="Phone" /><br></br><br></br>
                        <textarea className='form-input' placeholder='How can we help?' /><br></br><br></br>
                        <button>Submit</button>
                    </div>
                    <div className='img-sec'>
                        <img className='form-img' src={Design} alt='design' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Form