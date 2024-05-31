import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="row">
            <i className='bx bxl-facebook'></i>
            <i className='bx bxl-twitter' ></i>
            <i className='bx bxl-linkedin' ></i>
            <i className='bx bxl-instagram' ></i>
        </div>
        <div className="row">
            <li className='active'>Home</li>
            <li>About</li>
            <li>Mobile Devices</li>
            <li>Contact</li>
        </div>
        <p>© 2024 KRGadgets. All rights eserved.</p>
    </div>
  )
}

export default Footer