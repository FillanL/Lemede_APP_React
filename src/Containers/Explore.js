import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampaign } from "../Actions/campaignsActions";
import '../CssContainer/explore.css'

import CampaignCard from "../Componets/CampaignCard";

class Explore extends Component {
//   componentWillMount() {
//     this.props.fetchCampaign();
//   }

  render() {
      console.log(this.props);
      
    return (
      <div>
        <input type="search" placeholder="search" />
        <h2>aalll campaigns</h2>
        <div className="griddy">
          {this.props.campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns
});

export default connect(
  mapStateToProps,
  { fetchCampaign }
)(Explore);
