import React, { useEffect } from 'react'
import Logo from './Logo';
import PurpleButton from './PurpleButton';
import { useHamburgerMenu } from './HamburgerMenu';
import { Link as ScrollLink } from 'react-scroll';
import ImageLogo1 from '../assets/mortage 1.svg';
import ImageLogo2 from '../assets/IMG_2529 3.svg';
import '../styles/Navbar.css';


function Navbar() {

    const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useHamburgerMenu();

    const hmburgerClass = isHamburgerMenuOpen ? 'navBar open' : 'navBar';

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
    <div className={hmburgerClass}>
      <Logo logo='navBarLogo' LogoImage={window.innerWidth < 1024 ? ImageLogo1 : ImageLogo2} />
      <ul>
        <li><ScrollLink onClick={closeHamburgerMenu} smooth={true} to='home'>Home</ScrollLink></li>
        <li><ScrollLink onClick={closeHamburgerMenu} smooth={true} to='features'>Features</ScrollLink></li>
        <li><ScrollLink onClick={closeHamburgerMenu} smooth={true} to='contact-us'>Contact Us</ScrollLink></li>
      </ul>
      <PurpleButton innerText='Close' button='closeButton' purpleButton='closeBtnpurpleButton' onClick={closeHamburgerMenu} />
      <ScrollLink smooth={true} to='heroHeaderText' ><PurpleButton innerText='Join Waitlist' button='joinWaitlistNavButton' purpleButton='joinWaitListpurpleButton' /></ScrollLink>
    </div>
  )
}

export default Navbar;
