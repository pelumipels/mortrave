import './App.css';
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import SpeakToUs from './components/SpeakToUs';
import WaitList from './components/WaitList';
import Footer from './components/Footer';
import { useHamburgerMenu } from './components/HamburgerMenu';
import Modal from './components/Modal';


function App() {

  const { isHamburgerMenuOpen } = useHamburgerMenu();

  const [modalOpen, setModalOpen] = useState(false);

  const bodyStyles = {
    overflowY: isHamburgerMenuOpen || modalOpen ? 'hidden' : 'auto',
  };

  document.body.style.overflowY = bodyStyles.overflowY;

  return (
    <div className='App'>
      <HeroSection />
      <Features />
      <SpeakToUs onClick={() => {
          setModalOpen(true)
        }} />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <WaitList />
      <Footer />
    </div>
  );
}

export default App;
