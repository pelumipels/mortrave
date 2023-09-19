import React from 'react';
import PurpleButton from "./PurpleButton";
import '../styles/SpeakToUs.css';
// import Modal from './Modal';
// import ScheduleACall from './ScheduleACall';

function SpeakToUs({onClick}) {

return (
    <div className='speakToUs'>
        <div className='topText'>
            <h1>Speak To Us...</h1>
            <p>We look forward to receiving any questions from you regarding how to get started with Mortrave</p>
            <PurpleButton innerText="Schedule A Call" button="buttonSpeakToUs" onClick={onClick} />
        </div>
    </div>
)
}

export default SpeakToUs;