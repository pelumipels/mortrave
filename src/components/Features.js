import React from 'react';
import Image1 from '../assets/a533937fb51c6351a2fba6cc52f8bd19.jpeg';
import Image2 from '../assets/9a94dac6534059f36206ffef7e443bfc.jpeg';
import Image3 from '../assets/e48416a794503ecdfb613645c101cebc.jpeg';
import Image4 from '../assets/997995c75387743d2531d30612722417.jpeg';
import '../styles/Features.css';

function Features() {
    const featuresContainers = [
        {
            image: Image1, headerText: "Budgeting Tool", infoText: "This feature allows you to pre-book items and prepare a plan. With AI tools you can now start, generate and pen down things to do"
        },
        {
            image: Image2, headerText: "Add Contacts", infoText: "This allows you to create a contact list of important people to help you execute your ideas, this feature allows you to store name, phonebook, account details and address of important go to contacts"
        },
        {
            image: Image3, headerText: "Search", infoText: "You can now search for ideas and plans, then speak with our customer service team on your needs to execute your projects"
        },
        {
            image: Image4, headerText: "Advance Pay", infoText: "You can schedule payments to your important contacts on dates you stipulate for your budget and start to actualize your goals"
        }
    ]

return (
    <div className='features' id='features'>
        <h1 className='headerTextFeatures'>Our Features...</h1>
        <div className='featuresContainers'>{featuresContainers.map((featureContainer, index) => (
            <div className='featureContainer' key={index}>
                <div className='imageContainer'>
                    <img src={featureContainer.image} alt={featureContainer.headerText} />
                </div>
                <h2>{featureContainer.headerText}</h2>
                <p>{featureContainer.infoText}</p>
            </div>
            ))}
        </div>
    </div>
)
}

export default Features;
