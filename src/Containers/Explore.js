import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCampaign, selectCampaign } from "../Actions/campaignsActions";
import CampaignCard from "../Componets/CampaignCard";
import "../CssContainer/explore.css";

class Explore extends Component {

  render() {
    console.log(this.props);

    return (
      <div>
        <input type="search" placeholder="search" />
        <h2>aalll campaigns</h2>
        <div className="griddy">
          {this.props.campaigns.map(campaign => (
            <Link
              onClick={() => this.props.selectCampaign(campaign.id)}
              key={campaign.id}
              to={`/campaign/${campaign.id}`}
            >
              <CampaignCard key={campaign.id} campaign={campaign} />
            </Link>
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
  { fetchCampaign, selectCampaign }
)(Explore);
