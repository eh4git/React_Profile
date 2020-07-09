import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/main.css';
import './assets/css/style.css'
import LandingPage from "./components/LandingPage"
import MainPage from './components/MainPage';
// import Pdf from "../../documents/resume.pdf";


export default ()=> {

  // onResumeClick() {
  //   window.open(Pdf);
  // }
  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  // renderPage = () => {
  //   switch (this.state.currentPage) {
  //     case "LandingPage":
  //       return <LandingPage handlePageChange={this.handlePageChange} />;
  //     case "MainPage":
  //       return <MainPage />;
  //     default:
  //       break;
  //   }
  // };

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/profile">
              <MainPage  />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
