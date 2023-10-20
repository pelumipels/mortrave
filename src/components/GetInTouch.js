import React from 'react';
// import GetInTouchBG from './getInTouchBG';
import GooglePlayStoreLogo from '../assets/GooglePlayStoreLogo.svg'
import AppleAppStoreLogo from '../assets/AppleAppStoreLogo.svg'
import SpeechImage from '../assets/speechImage.svg'
import LadyImage from '../assets/ladyImage.svg'
import Button from "./Button";
import '../styles/GetInTouch.css';

function GetInTouch({onClick}) {

return (
    <div className='getInTouch'>
        <div className='leftSide'>
            <h1>Get In Touch With Us Now</h1>
            <div className='phoneStoreImages'>
                <img className='img1' src={GooglePlayStoreLogo} alt="Google_PlayStore_Logo" />
                <img className='img2' src={AppleAppStoreLogo} alt="Apple_AppStore_Logo" />
            </div>
            <p>Coming soon</p>
            <Button innerText="Schedule a call" button="buttonGetInTouch" onClick={onClick} />
        </div>
        <div className='getInTouchImages'>
            <div>
                <img className='img3' src={SpeechImage} alt="SpeechImage" />
                <img className='img4' src={LadyImage} alt="LadyImage" />
            </div>
        </div>
    </div>
)
}

export default GetInTouch;