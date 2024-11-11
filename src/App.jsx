import React, { useEffect } from 'react';
import ProfileCard from './Comps/Card'

import './App.css'
function disableRightClick(event) {
  event.preventDefault();
}
function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "F12") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <ProfileCard/>
  )
}

export default App
