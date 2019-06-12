import React, { Component } from 'react'
import { connect } from "react-redux";
// import {logInUser} from '../Actions/authUserActions'

import FeaturedCampaigns from '../Componets/FeaturedCampaigns'
import RecomendedCampaigns from '../Componets/RecomendedCampaigns'


 class Home extends Component {
    render() {
        console.log("here",this.props);
        
        return (
            <div>
                <FeaturedCampaigns />
                <RecomendedCampaigns />   
            </div>
        )
    }
}
const mapStateToProps = state => ({
  currentUser: state
});
export default connect(mapStateToProps)(Home)
