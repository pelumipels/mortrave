import React from 'react';
import FrameComponent from './FrameComponent';
import '../styles/Features.css';
import { motion } from "framer-motion";

function Features1({featuresTopic,featuresDetail,featuesButtonText,featuresSubDetail,featuresPhoneImage}) {

return (
    <div className='features' id='features'>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
        >
            {/* <div className='headerTextFeatures'>FEATURES</div> */}
            <div className='featureTopic'>{featuresTopic}</div>
            <div className='featureDetail'>{featuresDetail}</div>
        </motion.div>
        <div className='features1SecondPart'>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .5 }}
                className='features1SecondPart1stDiv'
            >
                <div className='featuesButtonText'>{featuesButtonText}</div>
                <div className='featuresSubDetail'>{featuresSubDetail}</div>
            </motion.div>
            <div className='horizontalDivider'></div>
            <FrameComponent featuresPhoneImage={featuresPhoneImage} />
        </div>
    </div>
)
}

export default Features1;