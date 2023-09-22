import React, { useState } from 'react';
import PurpleButton from './PurpleButton';
import Popup from './Popup';
import { useEmailHandleSubmit } from "./SubmitForm";
import '../styles/WaitList.css';

function WaitList() {

    const { popupMessage, setPopupMessage, isPopupVisible, setPopupVisible, isMessageSuccess, setIsMessageSuccess } = useEmailHandleSubmit();
    // const { popupMessage, setPopupMessage, isPopupVisible, setPopupVisible, isMessageSuccess, setIsMessageSuccess, submitForm } = useEmailHandleSubmit();

    const initialFormData = {
        email: ''
      };

    //   const endPoint = 'http://localhost:3000/joinWaitList';
    //   const endPoint = 'https://mortrave-financial-services-api.onrender.com/joinWaitList';
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzIvubATs2s8aqtEHeZWdJOBgoJX2bE5c3vVtDlpR_blnSLTTQkoaFOTgMypblnt5yaBQ/exec';

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

    // const handleSubmit = (e) => {
    //     e.preventDefault(); // Prevent the default form submission behavior
        
    //     if (validateForm()) {
    //         // Form is valid, proceed with submission
    //         submitForm( initialFormData, formData, setFormData, endPoint );
    //     }
    // };

        const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formData1 = new FormData(e.target);
            fetch(scriptURL, {
                method: 'POST',
                mode: 'cors', // Important for CORS-enabled requests
                body: formData1
            }).then((response) => {

                if (response.status === 200) {
                    console.log('Success!')
                    setPopupMessage('Success!');
                    setPopupVisible(true);
                    setIsMessageSuccess(true);
                    setFormData(initialFormData);
                }
            }).catch((error) => {
                // Handle any errors that occur during the POST request
                console.error('Error:', error);
                setPopupMessage('Failed!');
                setPopupVisible(true);
            })
            .finally(() => {
                // Enable the form after the request is complete (success or error)
                setTimeout(() => {
                    setPopupVisible(false);
                }, 3000);
            });
        }
        
    };

return (
    <div className='waitList'>
        <div className='svgAndText'>
            <svg xmlns="http://www.w3.org/2000/svg" width={390} height={516} viewBox="0 0 390 516" fill="none">
                <g filter="url(#filter0_f_156_847)">
                    <path d="M135.342 21.476C135.342 21.476 293.069 -27.2009 328.634 75.9477C364.2 179.096 300.618 134.555 448.476 222.365C596.333 310.174 530.292 388.519 402.859 392.347C275.426 396.176 204.538 568.372 201.448 481.588C198.357 394.805 -31.7708 437.541 -25.5702 347.147C-19.3695 256.754 -82.2251 151.95 -9.86704 115.353C62.491 78.7555 135.342 21.476 135.342 21.476Z" fill="#FF0000"fillOpacity="0.05"/>
                </g>
                <defs>
                    <filter id="filter0_f_156_847" x={-55} y={0} width={598} height={516} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation={5} result="effect1_foregroundBlur_156_847" />
                    </filter>
                </defs>
            </svg>
            <h1>What are you waiting for? Join the waitlist now to save a spot for yourself</h1>
        </div>
        <form onSubmit={handleSubmit} disabled={isPopupVisible} className='formEmail'>
            {isMessageSuccess && <div className="success-message">{popupMessage}</div>}
            <div className='formDiv'>
                <input type='email' name='email' id='email1' autoComplete='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Enter email address...'  />
                <PurpleButton innerText={isPopupVisible ? 'Joining...' : 'Join Waitlist'} button="button1" />
            </div>
            <Popup message={popupMessage} show={isPopupVisible} />
        </form>
    </div>
)
}

export default WaitList;
