import React from 'react';
import '../styles/Popup.css';

const Popup = ({ message, show }) => {

    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                <p>{message}</p>
                <div className="progress-bar"></div>
            </div>
        </div>
    );
};

export default Popup;