import React from 'react';
import { connect } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { fetchCampaign } from "./Actions/campaignsActions";
import { isUserLoggedIn } from "./Actions/authUserActions";

import NavBar from './Componets/NavBar';
import Footer from './Componets/Footer';
import Content from './Containers/Content';
import './CssContainer/App.css'

library.add(fab, faCheckSquare, faCoffee)
class App extends React.Component {

  componentWillMount() {
    this.props.fetchCampaign()
    this.props.isUserLoggedIn()
  }
  
  render(){
    // console.log(this.props.isUserLoggedIn);
    return (
    <>
      <NavBar />
        <Content />
      <Footer />
    </>
  )}
}

// const mapStateToProps =(state)=>({
//   curren: state.user.isUserLoggedIn
// })
export default connect(null, { fetchCampaign, isUserLoggedIn } )(App);
