import React from 'react';
import '../styles/PurpleButton.css';

function PurpleButton({innerText, button, purpleButton, onClick}) {

return (
    <div className={`purpleButton ${purpleButton}`} onClick={onClick}>
        <button className={`${button}`}>{innerText}</button>
    </div>
)
}

export default PurpleButton;
