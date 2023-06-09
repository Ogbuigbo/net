import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {

    const[show, handleShow] = useState(false);
    const history = useNavigate();

    const transitNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }


    useEffect(()=>{
            window.addEventListener('scroll', transitNavBar)

            return  () => window.removeEventListener('scroll', transitNavBar)
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__content'>
        <img
        onClick ={()=> history('/')}
        className='nav__logo'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
        alt='netflix-logo' 
        />

        <img
        onClick={()=>history('/profile')}
         className='nav__avatar'
         src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
         alt='netflix-avatar'
          />
        
        </div>
    </div>
  )
}

export default Nav