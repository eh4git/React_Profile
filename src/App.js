import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/main.css';
import './assets/css/style.css'
import LandingPage from "./components/LandingPage"
import MainPage from './components/MainPage';



export default () => {

  const [mainHide, setMainHide] = useState(true);

  function handleButtonClick() {
    setMainHide(false)
  }

  function handlePageHide() {
    switch (mainHide) {
      case true:
        return (
          <Router>
            <div>
              <Route exact path="/">
                <LandingPage handleButtonClick={handleButtonClick} />
              </Route>
            </div>
          </Router>
        )
      case false:
        return (
          <Router>
            <div>
              <Route exact path="/">
                <MainPage />
              </Route>
            </div>
          </Router>
        )
      default:
        return
    }
  }
  return (handlePageHide());
}
