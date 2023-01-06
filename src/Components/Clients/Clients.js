import React from 'react'
import './Clients.css'
import Laddoos from '../Images/Laddoos.jpg'
import Vsjewellers from '../Images/workEight.png'
import LivinHub from '../Images/LivinHub.png'
import SaiSweets from '../Images/SaiSweets.png'
import GigHz from '../Images/GigHz.png'
import TrendyMeat from '../Images/TrendyMeat.png'
import Leap from '../Images/Leap.png'


const Clients = () => {
  return (
    <div className='client-main'>
      <h1>Our Esteemed Clients</h1>
      <div className='client-container'>
        <div className='client-card'>
          <img className='client-img' src={Laddoos} alt='laddoo'/>
          <div className='client-overlay'>
            <p className='client-text'>Laddoos is a top player in the category sweet retailers in bangalore. </p>
          </div>
        </div>
        <div className='client-card'>
          <img className='client-img' src={Vsjewellers} alt='jeweller'/>
          <div className='client-overlay'>
            <p className='client-text'>VS Jewellers deals in stone and gold jewellery, gold and stone necklace sets, chains, finger rings, bangles, pendants, stud drops, bracelets, long necklaces and diamond jewellery.</p>
          </div>
        </div>
        <div className='client-card'>
          <img className='client-img' src={LivinHub} alt='hub'/>
          <div className='client-overlay'>
            <p className='client-text'>Livin Hub hotel provides high quality amenities, full service accommodations, on-site full-service restaurants, and the highest level of personalized and professional services.</p>
          </div>
        </div>
        <div className='client-card'>
          <img className='client-img' src={SaiSweets} alt='sweets'/>
          <div className='client-overlay'>
            <p className='client-text'>Shirdi Sai Sweets & Bakers in Subash Road Ananthapur, Anantapur is a top player in the category Sweet Shops in the Anantapur.</p>
          </div>
        </div>
        <div className='client-card'>
          <img className='client-img' src={GigHz} alt='gig'/>
          <div className='client-overlay'>
            <p className='client-text'>GigHz Technologies is the young and dynamic company catering Hardware, Mechanical and Software services for OEMs in Medical, Aerospace, Telecom and Automotive market.</p>
          </div>
        </div>
        <div className='client-card'>
          <img className='client-img' src={TrendyMeat} alt='meatShop'/>
          <div className='client-overlay'>
            <p className='client-text'>Trendy Meat in Ramanagar makes fresh chicken available. It has a strong hold in the market by delivering good quality chicken to it's customers.</p>
          </div>
        </div>
        <div className='client-card'>
          <img className='client-img' src={Leap} alt=''/>
          <div className='client-overlay'>
            <p className='client-text'>LEAP stands for Leading Enterprise in Asset Pooling. We are a technology-driven asset pooling company dedicated to providing dependable and cost-effective Supply Chain Solutions all across India.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Clients