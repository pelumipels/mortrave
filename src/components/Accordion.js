import React from 'react';
import useOpenController from './useOpenController'

export const ExpendableColumn = ({question, isOpen, toggle}) => {
    return (
        <div className='column-container' onClick={toggle}>
            <div className='column-text'>{question}</div>
            <button className='expendable-button'>
                <span 
                    className="material-symbols-outlined"
                    style={{transform:`rotate(${isOpen ? 180 : 0}deg)`, transition:'all 0.25s'}}
                >
                    expand_more
                </span>
            </button>
        </div>
    )
}

export const TextSection = ({text}) => {
    return (
        <div className='text-container'>
            <div>{text}</div>
        </div>
    )
}

const Accordion = ({ index, section, totalItems}) => {
    const {isOpen, toggle} = useOpenController(false);

    const isLastItem = index === totalItems - 1;

    return (
        <div className='accordion-container'>
            <ExpendableColumn 
                question={section.question}
                isOpen={isOpen}
                toggle={toggle}
            />
            {isOpen && <TextSection text={section.answer} />}
            <div className={`underline ${isLastItem ? 'hidden-underline' : ''}`}></div>
        </div>
    )
}

export default Accordion