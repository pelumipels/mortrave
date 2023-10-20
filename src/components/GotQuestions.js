import React from 'react'
import { accordionData } from './accordionData';
import Accordion from './Accordion';
import '../styles/GotQuestions.css';

function GotQuestions() {
  return (
    <div className='gotQuestions'>
        <div className='faq'>FAQ'S</div>
        <h1>Got questions</h1>
        <p>Get the answers to your questions about Mortrave.</p>
        {accordionData.map((section, index) => (
            <Accordion key={index} index={index} section={section} totalItems={accordionData.length} />
        ))}
    </div>
  )
}

export default GotQuestions
