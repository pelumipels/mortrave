import React from 'react';
import '../styles/FrameComponent.css';
import { motion } from "framer-motion";

const FrameComponent = ({featuresPhoneImage}) => {
  return (
    <motion.div className='frameComponent'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      viewport={{once:true}}
      whileHover={{ scale: 1.05}}
    >
      <div className='frameComponentImage'><img src={featuresPhoneImage} alt="" /></div>
    </motion.div>
  )
}

export default FrameComponent
