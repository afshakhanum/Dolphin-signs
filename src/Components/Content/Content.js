import React from 'react'
import './Content.css'
import LED from '../Images/LedBoard.jpg'
import Acrylic from '../Images/acrylicBoard.jpg'
import Aluminium from '../Images/alluminiumBoard.png'
import NamePlate from '../Images/namePlate.png'
import SSMS from '../Images/msSsBoard.jpg'

const Content = () => {
  return (
    <div className='content-main'>
      <h1>Works We Undertake</h1>
      <div className='content-container'>
      <div className='works-container-odd'>
          <div><img className='phone-imgs' src={LED} alt="ledimage" /></div>
          <div className='text-container-odd'>
            <h3>LED Sign Boards</h3>
            <p>LED Sign Boards are meant to display a name or message. The objective could be many reasons; mainly it is used to drive a customer to the retail store, build brand awareness by displaying an image or video, display announcements or information which is a good option for educational institutions etc.</p>
          </div>
        </div>
        <br></br>
        <div className='works-container-even'>
          <div><img className='phone-imgs' src={Acrylic} alt="acrylicimage" /></div>
          <div className='text-container-even'>
            <h3>Acrylic Sign Boards</h3>
            <p>Acrylic Sign Boards are generally ultra-fine and they also provide an admirable look. No matter what type of signage you require, choose the one that suits you the best. What you pick can be on the basis of pricing, quality, type, looks etc. They are long lasting and give an attractive look.</p>
          </div>
        </div>
        <br></br>
      <div className='works-container-odd'>
          <div><img className='phone-imgs' src={Aluminium} alt="Aluminium" /></div>
          <div className='text-container-odd'>
            <h3>Aluminium Sign Boards</h3>
            <p>Aluminum bond sign for long-term signage and decoration indoors and outdoors. The aluminum sign can be mounted to building fronts as company sign, practice sign and for information. For decoration with your company logo or as photo wall at reception or in shops and stores the aluminum bond sign suits as well as in conference rooms and customer areas.</p>
          </div>
        </div>
        <br></br>
        <div className='works-container-even'>
          <div><img className='phone-imgs' src={NamePlate} alt="NamePlate" /></div>
          <div className='text-container-even'>
            <h3>Name Plates</h3>
            <p>A name plate is a method for displaying the name of a person, logo, product, or mechanism and is made from a variety of materials to serve as a long term identifier. The production, manufacture, and design of nameplates involves a variety of exceptionally durable materials that are used to etch, engrave, or emboss and permanently place data or information.</p>
          </div>
        </div>
        <br></br>
        <div className='works-container-odd'>
          <div><img className='phone-imgs' src={SSMS} alt="SSMS" /></div>
          <div className='text-container-odd'>
            <h3>3D Desgin and SS,MS Letter Boards</h3>
            <p>3D Letters are available in customized options for multitude of application. The 3D letter is very elegant, and one of the best to present the 3D building numbers.</p>
            <p>The SS and MS Letter are widely used in the urban context of advertising in shopping malls, retail outlet, bars or restaurants. Known for high end visual appeal, these are available in choice of illuminations and can be further customized in specifications as detailed by the clients.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content