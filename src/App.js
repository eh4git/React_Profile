import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/main.css';
import './assets/css/style.css'
import LandingPage from "./components/LandingPage"
import MainPage from './components/MainPage';


class App extends Component {
  state = {
    currentPage: "LandingPage"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch(this.state.currentPage){
      case "LandingPage":
        return <LandingPage handlePageChange={this.handlePageChange}/>;
      case "MainPage":
        return <MainPage />;
      default:
        break;
    }
  };
  

  render(){
      return (
        <Router>
        <div>
          <Switch>
            <Route exact path={["/React_Profile"]}>
              <LandingPage />
            </Route>
            <Route exact path="/React_Profile/profile">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
  );
  }

}

export default App;
