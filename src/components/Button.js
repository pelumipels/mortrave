import React from 'react';
import '../styles/Button.css';

function Button({innerText, button, onClick}) {

return (
    <div>
        <button className={`${button}`} onClick={onClick}>{innerText}</button>
    </div>
)
}

export default Button;
