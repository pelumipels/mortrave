import React, { useState } from 'react';
import featuresPhoneImage1 from '../assets/Projects2.png';
import featuresPhoneImage2 from '../assets/Contact2.png';
import featuresPhoneImage3 from '../assets/Search1.png';
import featuresPhoneImage4 from '../assets/AddMoney2.png';
import HeroSection from '../components/HeroSection';
import Features1 from '../components/Features1';
import Features2 from '../components/Features2';
import GetInTouch from '../components/GetInTouch';
import ScheduleACallModal from '../components/ScheduleACallModal';
import GotQuestions from '../components/GotQuestions';
import WaitList from '../components/WaitList';
import Footer from '../components/Footer';
import { featuresData } from '../components/featuresData'
import { useHamburgerMenu } from '../components/HamburgerMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';

function Home() {
    const { isHamburgerMenuOpen, loading } = useHamburgerMenu();

    const [modalOpen, setModalOpen] = useState(false);
  
    const bodyStyles = {
      overflowY: isHamburgerMenuOpen || modalOpen || loading ? 'hidden' : 'auto',
    };
  
    document.body.style.overflowY = bodyStyles.overflowY;

  return (
    <motion.div className='home'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: .4, ease: 'ease'}}
    >
        <ToastContainer 
            autoClose={1000}
        />
        <Loading loading={loading}/>
        <HeroSection />
        <div className='headerTextFeatures'>FEATURES</div>
        <Features1 
          featuresTopic={featuresData[0].featuresTopic}
          featuresDetail={featuresData[0].featuresDetail}
          featuesButtonText={featuresData[0].featuesButtonText}
          featuresSubDetail={featuresData[0].featuresSubDetail}
          featuresPhoneImage={featuresPhoneImage1}
        />
        <Features2
          featuresTopic={featuresData[1].featuresTopic}
          featuresDetail={featuresData[1].featuresDetail}
          featuesButtonText={featuresData[1].featuesButtonText}
          featuresSubDetail={featuresData[1].featuresSubDetail}
          featuresPhoneImage={featuresPhoneImage2}
        />
        <Features1
          featuresTopic={featuresData[2].featuresTopic}
          featuresDetail={featuresData[2].featuresDetail}
          featuesButtonText={featuresData[2].featuesButtonText}
          featuresSubDetail={featuresData[2].featuresSubDetail}
          featuresPhoneImage={featuresPhoneImage3}
        />
        <Features2 
          featuresTopic={featuresData[3].featuresTopic}
          featuresDetail={featuresData[3].featuresDetail}
          featuesButtonText={featuresData[3].featuesButtonText}
          featuresSubDetail={featuresData[3].featuresSubDetail}
          featuresPhoneImage={featuresPhoneImage4}
        />
        <GetInTouch 
          onClick={() => {
            setModalOpen(true)
          }} />
        {modalOpen && <ScheduleACallModal 
                        setOpenModal={setModalOpen}
                      />
        }
        <GotQuestions />
        <WaitList />
        <Footer />
    </motion.div>
  )
}

export default Home
