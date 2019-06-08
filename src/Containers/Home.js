import React, { Component } from 'react'
import FeaturedCampaigns from '../Componets/FeaturedCampaigns'
import RecomendedCampaigns from '../Componets/RecomendedCampaigns'
import { connect } from "react-redux";


 class Home extends Component {
    render() {
        // console.log(this.props);
        
        return (
            <div>
                <FeaturedCampaigns />
                <RecomendedCampaigns />   
            </div>
        )
    }
}
// const mapStateToProps = state => ({
//   campaigns: state.campaigns.campaigns
// });
export default  Home
