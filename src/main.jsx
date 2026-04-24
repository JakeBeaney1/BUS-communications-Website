import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReactLenis from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)

// Fullscreen API toggle (F11) with cross-browser/Safari support
const getFullscreenElement = () => {
  return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullScreenElement
    || document.msFullscreenElement
    || null;
};

const enterFullscreen = (el) => {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
};

const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'F11') {
    e.preventDefault();
    e.stopPropagation();
    if (!getFullscreenElement()) {
      enterFullscreen(document.documentElement);
    } else {
      exitFullscreen();
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </React.StrictMode>,
)
