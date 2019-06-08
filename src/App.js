import React from 'react';
import { connect } from "react-redux";
import { fetchCampaign } from "./Actions/campaignsActions";
// import './CssContainer/App.css'
// import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './Componets/NavBar';
import Footer from './Componets/Footer';
import Content from './Containers/Content';


class App extends React.Component {

  componentWillMount() {
    this.props.fetchCampaign()
  }
  
  render(){
    // console.log(this.props);
    return (
    <>
      <NavBar />
        <Content />
      <Footer />
    </>
  )}
}


export default connect(null, { fetchCampaign } )(App);
