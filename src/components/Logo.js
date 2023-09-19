import React from 'react';
import '../styles/Logo.css';
// import LogoImage from '../assets/ca12988acd80c3190a6e9d8c9de7e159.png';

function Logo({logo, LogoImage}) {

return (
    <>
        <img className={logo} src={LogoImage} alt="Logo" />
    </>
)
}

export default Logo
