import React from 'react';
import '../styles/PhoneComponent.css';

const PhoneComponent = ({PhoneScreen, phoneComponentClassName}) => {
  return (
    <div className={`phoneComponent ${phoneComponentClassName}`}>
        <img className='phoneScreen' src={PhoneScreen} alt="Phone_Screen" />
    </div>
  )
}

export default PhoneComponent