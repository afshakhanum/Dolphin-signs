import {React,useState} from 'react'
import Marquee from "react-fast-marquee";
import { Button, Modal } from 'antd';
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
            <img className='our-word-image' src='https://5.imimg.com/data5/ST/XR/MY-39486235/3d-sign-board-500x500.jpg' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgKSMp9BF0HWtfI2JVT028IFhNIm_akspi6phkjGSvYMcoYDgVthbPmeJlZcH30Y9N-o&usqp=CAU' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://5.imimg.com/data5/YK/BI/RV/ANDROID-6961708/prod-20200116-1232174277009699058598341-jpg-500x500.jpg' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://5.imimg.com/data5/SW/JG/MY-23538688/stainless-steel-sign-board-500x500.jpg' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://5.imimg.com/data5/ET/XZ/YY/SELLER-2180527/led-signage-board-500x500.jpg' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://5.imimg.com/data5/GH/IU/HR/SELLER-3836831/led-sign-board-500x500.jpg' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLTJnHijl5BDRzhRTQei5zUyd7-UXSjImM6HvnBAqgbjq7uz4m_xDZBT8JunOUDB2RW0&usqp=CAU' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://5.imimg.com/data5/SELLER/Default/2020/11/NP/JH/KL/63230126/acrylic-led-glow-sign-board-500x500.jpg' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://nexusgroups.in/uploads/productimage/7870led-sign-board-500x500.jpg' alt='' />
          </div>  
          <div onClick={showModal} className='work-image-div'>
            <img className='our-word-image' src='https://signagemumbai.in/wp-content/uploads/2018/01/dr.chang_.jpg' alt='' />
          </div>  
        </Marquee>

        <Modal title="Basic Modal" className='work-modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>
    </div>
  )
}

export default OurWork