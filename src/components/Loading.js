import React, { useEffect } from 'react'
import '../styles/Loading.css';
import { useHamburgerMenu } from './HamburgerMenu';
import { gsap } from 'gsap';



function Loading({ loading }) {
  const { show, setShow } = useHamburgerMenu();

  useEffect(() => {
    // Use GSAP to fade out the loading spinner
    if (show) {
      // Use GSAP to fade out the loading spinner
      gsap.to('.svg-container', {
        opacity: 0,
        duration: 1,
        onComplete: () => setShow(false),
      });
    }
    },[show, setShow]);

  return show ? (
    <div className="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142 142" fill="none">
        <circle cx="70.5823" cy="70.5825" r="44.5156" stroke="white" strokeWidth="1.58984" />
        <path
          className="loading-spinner"
          d="M32.0141 92.8497C28.6014 94.82 27.3958 99.2222 29.8172 102.331C33.9757 107.671 39.1577 112.16 45.0844 115.523C53.0876 120.064 62.1583 122.385 71.359 122.246C80.5596 122.108 89.5564 119.515 97.4196 114.736C103.242 111.197 108.287 106.553 112.283 101.091C114.61 97.9109 113.273 93.547 109.802 91.6802C106.332 89.8133 102.052 91.1708 99.561 94.2243C96.8834 97.5063 93.6565 100.323 90.0074 102.541C84.316 106.001 77.804 107.877 71.1444 107.977C64.4849 108.078 57.9194 106.398 52.1265 103.111C48.4124 101.004 45.1023 98.2848 42.3272 95.0848C39.7454 92.1076 35.4269 90.8793 32.0141 92.8497Z"
          fill="white"
        />
      </svg>
    </div>
    ) : loading ? (
    <div className="svg-container loading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142 142" fill="none">
        <circle cx="70.5823" cy="70.5825" r="44.5156" stroke="white" strokeWidth="1.58984" />
        <path
          className="loading-spinner"
          d="M32.0141 92.8497C28.6014 94.82 27.3958 99.2222 29.8172 102.331C33.9757 107.671 39.1577 112.16 45.0844 115.523C53.0876 120.064 62.1583 122.385 71.359 122.246C80.5596 122.108 89.5564 119.515 97.4196 114.736C103.242 111.197 108.287 106.553 112.283 101.091C114.61 97.9109 113.273 93.547 109.802 91.6802C106.332 89.8133 102.052 91.1708 99.561 94.2243C96.8834 97.5063 93.6565 100.323 90.0074 102.541C84.316 106.001 77.804 107.877 71.1444 107.977C64.4849 108.078 57.9194 106.398 52.1265 103.111C48.4124 101.004 45.1023 98.2848 42.3272 95.0848C39.7454 92.1076 35.4269 90.8793 32.0141 92.8497Z"
          fill="white"
        />
      </svg>
    </div>
    ) : null;
}

export default Loading