import React from 'react'
import './allphones.css'

const Phones = () => {
  return (
    <div className="phones">
      <h2>Find your phone</h2>
      <p className='description-p'>Browse our extensive collection to find the perfect phone that fits your needs and style. Your ideal phone is just a click away!</p>
      <div className="filter">
        <div className='form-field'>
          <label htmlFor="">Phone Brand</label>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Samsung</option>
            <option value="">Infinix</option>
            <option value="">Iphone</option>
            <option value="">Vivo</option>
            <option value="">Xiaomi</option>
            <option value="">Redmi</option>
            <option value="">Oppo</option>
            <option value="">Tecno</option>
          </select>        
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
        <div className='form-field'>
        <label htmlFor="">Price Range</label>
        <select name="" id="">
          <option value="">All</option>
          <option value="">less than #50,000</option>
          <option value="">#50,000 - #100,000</option>
          <option value="">#100,000 - #200,000</option>
          <option value="">#200,000 - #500,000</option>
          <option value="">#500,000 - #1,000,000</option>
        </select>
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </div>
      <div className="collection">

      </div>
    </div>
  )
}

export default Phones