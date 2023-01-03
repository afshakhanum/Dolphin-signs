import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='card-main'>
            <div className={props.className}>
                <img />
                <div className='card-overlay'>
                    <p className='text'>dddd</p>
                </div>
            </div>
        </div>
    )
}

export default Card