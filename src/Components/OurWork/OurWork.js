import {React,useState} from 'react'
import Marquee from "react-fast-marquee";
import { Modal } from 'antd';
import WhatsappLogo from '../Images/WhatsApp.png'
import './OurWork.css'

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
    <div>
            <h1 className='our-works-heading'>Our Works</h1>
        <Marquee
        speed={120}
        pauseOnHover={true}
        >
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://5.imimg.com/data5/ST/XR/MY-39486235/3d-sign-board-500x500.jpg' alt='img1' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgKSMp9BF0HWtfI2JVT028IFhNIm_akspi6phkjGSvYMcoYDgVthbPmeJlZcH30Y9N-o&usqp=CAU' alt='img2' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://5.imimg.com/data5/YK/BI/RV/ANDROID-6961708/prod-20200116-1232174277009699058598341-jpg-500x500.jpg' alt='img3' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://5.imimg.com/data5/SW/JG/MY-23538688/stainless-steel-sign-board-500x500.jpg' alt='img4' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://5.imimg.com/data5/ET/XZ/YY/SELLER-2180527/led-signage-board-500x500.jpg' alt='img5' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://5.imimg.com/data5/GH/IU/HR/SELLER-3836831/led-sign-board-500x500.jpg' alt='img6' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLTJnHijl5BDRzhRTQei5zUyd7-UXSjImM6HvnBAqgbjq7uz4m_xDZBT8JunOUDB2RW0&usqp=CAU' alt='img7' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://5.imimg.com/data5/SELLER/Default/2020/11/NP/JH/KL/63230126/acrylic-led-glow-sign-board-500x500.jpg' alt='img8' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://nexusgroups.in/uploads/productimage/7870led-sign-board-500x500.jpg' alt='img9' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-work-image' src='https://signagemumbai.in/wp-content/uploads/2018/01/dr.chang_.jpg' alt='img10' />
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
            <a  href="https://api.whatsapp.com/send?phone=+918618392962&text=Hello owaiz, I want this design detail%21%." target="_blank" rel="noreferrer"><img  className='whatsapp-logo' src={WhatsappLogo} alt='whatsapp' /></a>
          </div>
      </Modal>
    </div>
  )
}

export default OurWork