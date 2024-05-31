import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

type navbarProps = {
    section: string,
}

const Navbar = ({section}:navbarProps) => {

    

    const navigate = useNavigate();

  return (
    <nav>
        <div className="logo">
            <div className="droplet">
                <div className="droplet-text">
                    K
                </div>
            </div>
            <span>KRGadgets</span>
        </div>
        <div className="nav-items">
            <li className= {(section === 'home')? 'active': '' } onClick={() => navigate('/')}>Home</li>
            <li>About</li>
            <li className= {(section === 'phones')? 'active': '' } onClick={() => navigate('/phones')}>Mobile Devices</li>
            <li>Contact</li>
        </div>
        <div className="nav-order">
            <span className="material-symbols-outlined">shopping_cart</span>
            <li>Your Orders</li>
        </div>
    </nav>
  )
}

export default Navbar