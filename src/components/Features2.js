import React from 'react';
import FrameComponent from './FrameComponent';
import '../styles/Features.css';
import { motion } from "framer-motion";

function Features2({featuresTopic,featuresDetail,featuesButtonText,featuresSubDetail,featuresPhoneImage}) {

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
        <div className='features2SecondPart'>
            <FrameComponent featuresPhoneImage={featuresPhoneImage} />
            <div className='horizontalDivider'></div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .7 }}
                className='features2SecondPart3rdDiv'
            >
                <div className='featuesButtonText'>{featuesButtonText}</div>
                <div className='featuresSubDetail'>{featuresSubDetail}</div>
            </motion.div>
        </div>
    </div>
)
}

export default Features2;