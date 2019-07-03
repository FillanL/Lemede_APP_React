import React, { Component } from 'react'
import { connect } from "react-redux";

import FeaturedCampaigns from '../Componets/FeaturedCampaigns'

import RecomendedCampaigns from '../Componets/RecomendedCampaigns'
import Carousel from '../Componets/SlideShow'


 class Home extends Component {
    render() {
        
        return (
            <div>
                <Carousel />
                <FeaturedCampaigns />
                <div style={{backgroundColor: "#8f62bb", height:"1px", width:"60%", marginLeft:"20%"}}></div>
                <RecomendedCampaigns />   
            </div>
        )
    }
}
const mapStateToProps = state => ({
  currentUser: state
});
export default connect(mapStateToProps)(Home)
