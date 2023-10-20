import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from "framer-motion";
import Loading from './components/Loading';
import Home from './pages/Home';
import SuccessPage from './pages/SuccessPage';
import { gsap } from 'gsap';
import { useHamburgerMenu } from './components/HamburgerMenu';


function App() {

  const {show, setShow, formFilled} = useHamburgerMenu();

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/successful-form-submission", name: "SuccessModal", Component: SuccessPage },
    { path: "/*", name: "NotFound", Component: Home }
  ]

  useEffect(() => {
    window.addEventListener('load', () => {

      // Use GSAP to fade out the loading spinner
      gsap.to('.svg-container', { opacity: 0, duration: 1, onComplete: () => setShow(false) });

    }, []);

  }, [setShow]);

  
  // const routeComponents = routes.map(({path, Component}, index) => <Route key={index} path={path} element={<Component />} />)

  const routeComponents = routes.map(({ path, Component }, index) => {
    if (path === "/successful-form-submission" && !formFilled) {
      // If formFiled is false, route to the Home page instead of SuccessPage
      // console.log(formFilled)
      return (
        <Route key={index} path={path} element={<Home />} />
      );
    } else {
      // For other routes or when formFiled is true, use the original route
      return (
        <Route key={index} path={path} element={<Component />} />
      );
    }
  });

  return (
      <div className='App'>
        {show ? (<Loading />) :(
          <AnimatePresence mode="wait">
            <Routes>
              {routeComponents}
            </Routes>
          </AnimatePresence>
        )}
      </div>
  );
}

export default App;