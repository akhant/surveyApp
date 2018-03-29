import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import SurveyNew from "./SurveyNew";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from 'react-redux'
import * as actions from '../actions'


const Dashboard = params => {
  return <div>Dashboard</div>;
};
 class App extends Component {
  componentDidMount = () => {
this.props.fetchUser()
  }
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App)