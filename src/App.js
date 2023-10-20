import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from "framer-motion";
import Loading from './components/Loading';
import Home from './pages/Home';
import SuccessPage from './pages/SuccessPage';
import { useHamburgerMenu } from './components/HamburgerMenu';


function App() {

  const {show, setShow, formFilled} = useHamburgerMenu();

  useEffect(() => {
        setShow(false);
  }, [setShow]);

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/successful-form-submission", name: "SuccessModal", Component: SuccessPage },
    { path: "/*", name: "NotFound", Component: Home }
  ]

  const routeComponents = routes.map(({ path, Component }, index) => {
    if (path === "/successful-form-submission" && !formFilled) {
      // If formFiled is false, route to the Home page instead of SuccessPage.
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
        <AnimatePresence mode="wait">
          {show ? (<Loading />) :(
            <Routes>
              {routeComponents}
            </Routes>
          )}
        </AnimatePresence>
      </div>
  );
}

export default App;