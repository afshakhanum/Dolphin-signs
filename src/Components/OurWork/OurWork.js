import {React,useState} from 'react'
import Marquee from "react-fast-marquee";
import { Modal } from 'antd';
import WhatsappLogo from '../Images/WhatsApp.png'
import './OurWork.css'
import WorkOne from '../Images/workOne.png'
import WorkTwo from '../Images/workTwo.png'
import WorkThree from '../Images/workThree.png'
import WorkFour from '../Images/workFour.png'
import WorkFive from '../Images/workFive.png'
import WorkSix from '../Images/workSix.png'
import WorkSeven from '../Images/workSeven.png'
import WorkEight from '../Images/workEight.png'
import WorkNine from '../Images/workNine.png'
import WorkTen from '../Images/workTen.png'
import WorkEleven from '../Images/workEleven.png'
const OurWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='our-work-marquee-container'>
            <h1 className='our-works-heading'>Our Works</h1>
        <Marquee
        pauseOnHover={true}
        speed={100}
        >
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkOne} alt='img1' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkTwo} alt='img2' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkThree} alt='img3' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkFour} alt='img4' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkFive} alt='img5' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkSix} alt='img6' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkSeven} alt='img7' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkEight} alt='img8' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkNine} alt='img9' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkTen} alt='img9' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src={WorkEleven} alt='img9' />
          </div>  
        </Marquee>

        <Modal title="Selected Design" width={1000} className='work-modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className='modal-main-conatiner'>
            <div className='modal-image-container'>
          <img className='modal-image' src='https://5.imimg.com/data5/SW/JG/MY-23538688/stainless-steel-sign-board-500x500.jpg' alt='modal-img' />
            </div>
            <div className='modal-text-container'>
              <h2>Acrylic Design</h2>
              <p>This is the Design created by dolphin signs</p>
            </div>
          </div>
          <div className='modal-whatsapp-container'>
            <p>To make this design your click on below Whatsapp</p>
            <a  href="https://api.whatsapp.com/send?phone=+919164398851&text=Hello, I want this design details%21." target="_blank" rel="noreferrer"><img  className='whatsapp-logo' src={WhatsappLogo} alt='whatsapp' /></a>
          </div>
      </Modal>
    </div>
  )
}

export default OurWork