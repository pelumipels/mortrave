import React, { useEffect } from "react";
import GroupMark from '../assets/GroupMark.svg'
import GroupCircle from '../assets/GroupCircle.svg'
import GroupBackground from '../assets/GroupBackground.svg'
import GroupInnerCircle from '../assets/GroupInnerCircle.svg'
import Button from "../components/Button";
import "../styles/SuccessPage.css";
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { useHamburgerMenu } from '../components/HamburgerMenu';
import { useNavigate, useLocation } from "react-router-dom";

function SuccessPage() {
  const { setFormFilled } = useHamburgerMenu();

  const navigate = useNavigate();
  const location = useLocation();
  const successData = location.state.successData; 

  // useEffect(() => {
  //   // Use GSAP to animate elements when the Home component mounts
  //   const elementsToAnimate = document.querySelectorAll('.successPageContainer');

  //   gsap.from(elementsToAnimate, {
  //     opacity: 0,
  //     x: -50,
  //     duration: 1,
  //     stagger: 0.2, // Stagger the animations for multiple elements
  //   });

  //         // Return a cleanup function to handle exit animations
  //   return () => {
  //     // Use GSAP to animate elements when the Home component unmounts or exits
  //     gsap.to(elementsToAnimate, {
  //       opacity: 0,
  //       x: 50,
  //       duration: 1,
  //     });
  //   };
  // }, []);

  const goHome = () => {
    setFormFilled(false);
    navigate('/');
  }

  return (
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: .4, ease: 'ease'}}
          className="successPageContainer"
        >
          <div>
            <div className="successPageImages">
              <img src={GroupBackground} alt="GroupBackground" />
              <img src={GroupCircle} alt="GroupCircle" />
              <img src={GroupInnerCircle} alt="GroupInnerCirle" />
              <img src={GroupMark} alt="GroupMark" />
            </div>
          </div>
          <div className="successMessageTopic">{successData.successMessageTopic}</div>
          <div className="successMessageDetail">{successData.successMessageDetail}</div>
          {/* <Link to='/'><Button innerText='Go Home' button='onSuccessPageButton' /></Link> */} {/*You will need to import the Link component from react-router-dom */}
          <Button innerText='Go Home' button='onSuccessPageButton' onClick={goHome} />
        </motion.div>
  );
}

export default SuccessPage;