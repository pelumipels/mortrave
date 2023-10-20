import React, { useEffect } from 'react'
import Logo from './Logo';
import Button from './Button';
import '../styles/Navbar.css';
import { useHamburgerMenu } from './HamburgerMenu';
import { Link as ScrollLink } from 'react-scroll';


function Navbar() {

    const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useHamburgerMenu();

    const hamburgerClass = isHamburgerMenuOpen ? 'navBar open' : 'navBar';

    useEffect(() => {
        const handleWindowResize = () => {
          if (window.innerWidth >= 1024) {
            setIsHamburgerMenuOpen(false);
          }
        };
  
        window.addEventListener('resize', handleWindowResize);
        
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, [setIsHamburgerMenuOpen]);

      const closeHamburgerMenu = () => {
          setIsHamburgerMenuOpen(false);
      };

  return (
    <div className={hamburgerClass}>
      <div className='cancelIcon' onClick={closeHamburgerMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M13.5161 34.486L24.0021 24L34.4881 34.486M34.4881 13.514L24.0001 24L13.5161 13.514" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <Logo logo='navBarLogo2' />
      <ul>
        <li><ScrollLink onClick={closeHamburgerMenu} smooth={true} to='home'>Home</ScrollLink></li>
        <li><ScrollLink onClick={closeHamburgerMenu} smooth={true} to='features'>Features</ScrollLink></li>
        <li><ScrollLink onClick={closeHamburgerMenu} smooth={true} to='contact-us'>Contact Us</ScrollLink></li>
      </ul>
      <ScrollLink onClick={() => {window.innerWidth < 1024 && closeHamburgerMenu()}} smooth={true} to='heroHeaderText' ><Button innerText='Join Waitlist' button='joinWaitlistNavButton' /></ScrollLink>
    </div>
  )
}

export default Navbar;
