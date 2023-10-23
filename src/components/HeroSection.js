import Typewriter from 'typewriter-effect';
import React, { useState } from 'react';
import '../styles/HeroSection.css';
import Logo from './Logo';
import Button from './Button';
import Navbar from './Navbar';
import LoginPage from '../assets/firstPhoneHS.png'
import Dashboard3 from '../assets/secondPhoneHS.png'
import Login3 from '../assets/thirdPhoneHS.png'
import IdVerify from '../assets/fourthPhoneHS.png'
import { useHamburgerMenu } from './HamburgerMenu';
import { useEmailHandleSubmit } from "./SubmitForm";


function HeroSection() {

    const initialFormData = {
        email: ''
    };
    
    const [defaultFormData, setFormData] = useState(initialFormData);
    const { submitFormToGoogleSheets } = useEmailHandleSubmit();
    const { setIsHamburgerMenuOpen } = useHamburgerMenu();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzIvubATs2s8aqtEHeZWdJOBgoJX2bE5c3vVtDlpR_blnSLTTQkoaFOTgMypblnt5yaBQ/exec';

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const formData = e.target;
        console.log(formData)
        submitFormToGoogleSheets( formData, scriptURL, "WaitList Email" );
    };

    const toggleHamburgerMenu = () => {
        setIsHamburgerMenuOpen(prevState => !prevState);
    }

return (
    <div className='heroSection' id='home'>
        <Navbar />
        <div className='top'>
            <Logo logo='hSlogo' />
            <div className='menuIcon' onClick={toggleHamburgerMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
        {/* <div className='comingSoonDiv'>Coming Soon</div> */}
        <div className='heroHeaderText' id='heroHeaderText'>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('Start and Plan your next idea in <span style="color: #800080;">Africa</span> from <span style="color: #800080;">anywhere</span> in the world')
                .start()
                .callFunction(() => {
                    const cursorElement = document.querySelector('.Typewriter__cursor');

                    if (cursorElement) {
                      // Hide the cursor by setting its style to display: none
                        cursorElement.style.display = 'none';
                    }
                });
            }}
            options={{
                delay: 70
            }}
        />
        </div>
        <div className='heroText'>With Mortrave, you can plan towards a project in your home country and complete it with ease..</div>
        <form onSubmit={handleSubmit} id='joinWaitList' className='formEmail'>
            <div className='formDiv'>
                <div className='inputLabel1'>
                    <input type='email' name='email' id='emailHeroSection' autoComplete='email' value={defaultFormData.email} onChange={(e) => setFormData({ ...defaultFormData, email: e.target.value })} required />
                    <span>Enter email address...</span>
                </div>
                <Button innerText='Join Waitlist' button="joinWaitlistFirstButton" />
            </div>
        </form>
        <div className='phoneAndComingWrapper'>
            <div className='phoneComponents'>
                <img src={LoginPage} alt="LoginPage" className='firstphoneComponent' />
                <img src={Dashboard3} alt="" className='secondphoneComponent' />
                <img src={Login3} alt="Login3" className='thirdphoneComponent' />
                <img src={IdVerify} alt="IdVerify" className='fourthphoneComponent' />
            </div>
            <div className='comingSoon'>
                <div className="scroll text2">
                    <div>
                        Coming soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming soon  
                    </div>
                    <div>
                        Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming  soon  Coming soon  
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default HeroSection;