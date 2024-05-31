import React from 'react'
import './welcomePage.css'
import phoneImg from '../../assets/phones 3 convert.png'

const WelcomePage = () => {
  return (
    <div className='welcome'>
        <div className="text">
            <h2 style={{color: '#111'}}><br /> Welcome <span className="material-symbols-outlined" style={{fontSize: '40px', marginLeft: '10px'}}>waving_hand</span></h2>
            <p>Explore our wide selection of the latest smartphones from top brands. Whether you're looking for cutting-edge technology, budget-friendly options, or special features, we've got the perfect phone for you.  Start your journey to find your perfect phone today!</p>
            <button>
                Get Started
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
        </div>
        <div className="image">
            <img src={phoneImg} alt="" />
        </div>
    </div>
  )
}

export default WelcomePage