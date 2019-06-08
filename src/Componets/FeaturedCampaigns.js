import React, { Component } from "react";
import { connect } from "react-redux";
import '../CssContainer/featuredCampaign.css'

import CampaignCard from "./CampaignCard";

class FeaturedCampaigns extends Component {
  render() {
    console.log("feat", this.props.campaigns);

    return (
      <>
        <h2>FeaturedCampaigns</h2>
        <div className='feat'>
          {this.props.campaigns.map(campaign =>
            campaign.featured === true ? (
              <CampaignCard 
                key={campaign.id} 
                campaign={campaign} 
              />
            ) : null
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns
});
export default connect(mapStateToProps)(FeaturedCampaigns);
