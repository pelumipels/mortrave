import React, { useState } from 'react';
import PurpleButton from './PurpleButton';
import '../styles/HeroSection.css';
import Logo from './Logo';
import { useHamburgerMenu } from './HamburgerMenu';
import Navbar from './Navbar';
import Popup from './Popup';
// import {useSubmitFormToGoogleSheets} from "./SubmitFormToGoogleSheets";
import { useEmailHandleSubmit } from "./SubmitForm";
import ImageLogo from '../assets/IMG_2529 3.svg';

function HeroSection() {

    const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useHamburgerMenu();
    const { popupMessage, setPopupMessage, isPopupVisible, setPopupVisible, isMessageSuccess, setIsMessageSuccess, submitForm } = useEmailHandleSubmit();
    // const { popupMessage, setPopupMessage, isPopupVisible, setPopupVisible, isMessageSuccess, setIsMessageSuccess, submitFormToGoogleSheets } = useSubmitFormToGoogleSheets();

    const initialFormData = {
        email: ''
      };

      const endPoint = 'http://localhost:3000/joinWaitList';
    //   const scriptURL = 'https://script.google.com/macros/s/AKfycbzIvubATs2s8aqtEHeZWdJOBgoJX2bE5c3vVtDlpR_blnSLTTQkoaFOTgMypblnt5yaBQ/exec';

      const [formData, setFormData] = useState(initialFormData);

      const validateForm = () => {
        // Add your form validation logic here
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsMessageSuccess(false);
        // setIsFormValidMessage(false);

        if (!formData.email || !formData.email.match(emailPattern)) {
          // Show an error message or take appropriate action for email validation
        //   setIsFormValidMessage(true);
            setPopupMessage('Invalid email address');
            setPopupVisible(true);
            console.error('Invalid email address');
            setTimeout(() => {
                setPopupVisible(false);
            }, 3000);
            return false;
        }
    
        return true;
      };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        if (validateForm()) {
            // Form is valid, proceed with submission
            submitForm( initialFormData, formData, setFormData, endPoint );
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault(); // Prevent the default form submission behavior
        
    //     if (validateForm()) {
    //         // Form is valid, proceed with submission
    //         submitFormToGoogleSheets( initialFormData, formData, setFormData );
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (validateForm()) {
    //         // setIsLoading(true);
    //         try {
    //           const formData1 = new FormData(formData);
    //           await fetch(scriptURL, {
    //             method: 'POST',
    //             body: formData1
    //           });
    //           alert('Thank you for your response, we will get back to you soon!');
    //           setIsLoading(false);
    //           e.target.reset(); 
    //         } catch (error) {
    //           alert('An error occurred:', error);
    //           setIsLoading(false);
    //         }
    //     }
        
    //   };

    const toggleHamburgerMenu = () => {
        setIsHamburgerMenuOpen(prevState => !prevState);
    }

    const hamburgerClass = isHamburgerMenuOpen ? 'menuIcon open' : 'menuIcon';

return (
    <div className='heroSection' id='home'>
        <Navbar />
        <div className='top'>
            <Logo logo='hSlogo' LogoImage={ImageLogo} />
            <div className={hamburgerClass} onClick={toggleHamburgerMenu}></div>
        </div>
        <div className='outerDivButton'>
            <div className='innerDivButton'>
                <div>Coming Soon</div>
            </div>
        </div>
        <div className='heroHeaderText' id='heroHeaderText'><span>Start</span> and <span>Plan</span> your next <span>idea</span> in Africa from anywhere in the world</div>
        <div className='heroText'>With Mortrave, you can plan towards a project in your home country and complete it with ease..</div>
        <form onSubmit={handleSubmit} disabled={isPopupVisible} id='joinWaitList' className='formEmail'>
            {isMessageSuccess && <div className="success-message">{popupMessage}</div>}
            <div className='heroSectionForm1stDiv'>
                <input type='email' name='email' id='email' autoComplete='email ' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Enter email address...'  />
                <PurpleButton innerText={isPopupVisible ? 'Joining...' : 'Join Waitlist'} button="button1" />
            </div>
            <Popup message={popupMessage} show={isPopupVisible} />
        </form>
                <div className='arrowImg'></div>
        <div className='dashboardImg'></div>
    </div>
)
}

export default HeroSection;