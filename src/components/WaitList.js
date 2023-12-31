import React, { useState } from 'react';
import iPhone_13_Pro from '../assets/iPhone_13_Pro.png'
import you from '../assets/you.svg'
import Button from './Button';
import WaitingListSvg from './WaitingListSvg';
import '../styles/WaitList.css';
import { useEmailHandleSubmit } from "./SubmitForm";

function WaitList() {

    const initialFormData = {
        email: ''
    };
    
    const [defaultFormData, setFormData] = useState(initialFormData);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzIvubATs2s8aqtEHeZWdJOBgoJX2bE5c3vVtDlpR_blnSLTTQkoaFOTgMypblnt5yaBQ/exec';
    const { submitFormToGoogleSheets } = useEmailHandleSubmit();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const formData = e.target;
        submitFormToGoogleSheets( formData, scriptURL, "WaitList Email" );
    };

return (
    <div className='waitList'>
        <WaitingListSvg />
        <div className='waitListWrapper'>
            <div className='waitListWrapperInner'>
                <h1>What are you waiting for?</h1>
                <div className='waitListDetail'>Join the waitlist now to save a spot for yourself</div>
                <form onSubmit={handleSubmit} className='formEmail3'>
                    <div className='formDiv3'>
                        <div className='inputLabel2'>
                            <input type='email' name='email' id='emailWaitList' autoComplete='email' value={defaultFormData.email} onChange={(e) => setFormData({ ...defaultFormData, email: e.target.value })} required />
                            <span>Enter email address...</span>
                        </div>
                        <Button innerText='Join Waitlist' button="joinWaitlistSecondButton" />
                    </div>
                </form>
            </div>
            <div className='waitListImages'>
                <div>
                    <img src={iPhone_13_Pro} alt="IPhone_13_Pro_Image" className='iPhone13'/>
                    <img src={you} alt="youImage" className='youImage' />
                </div>
            </div>
        </div>
    </div>
)
}

export default WaitList;