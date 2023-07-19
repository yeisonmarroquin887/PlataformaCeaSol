import React, { useState } from 'react'
import './style.components/header.css'

const Header = () => {

  const [Cambio, setCambio] = useState(true)
  const clickMenu = () => {
    setCambio(false)
  }
  const returnMenu = ()=>{
    setCambio(true)
  }
  return (
    <div className='Header'>
        <nav className='Header_image'>
           <img className='Header_img' src="../image/image 2.png" alt="" />
        </nav>
            
             <i onClick={clickMenu} class='bx bx-menu'></i>
               <nav  className={`Header_info ${Cambio && 'close'}`}>
           <ul className='Header_ul'>
            <li className='Header_li'>Inicio</li>
            <li className='Header_li'>Nosotros</li>
            <li className='Header_li'>Servicios</li>
            <li className='Header_li'>Contactenos</li>
            <li className='Header_li'>Plataforma Virtual</li>
            <li className='Header_volver' onClick={returnMenu}>volver</li>
           </ul>
        </nav>
        
       
     
    </div>
  )
}

export default Header