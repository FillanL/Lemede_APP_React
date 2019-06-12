import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectCampaign } from "../Actions/campaignsActions";
import "../CssContainer/featuredCampaign.css";
import CampaignCard from "./CampaignCard";

class FeaturedCampaigns extends Component {
  render() {
    // console.log(selectCampaign());
    
    return (
      <>
        <h2>FeaturedCampaigns</h2>
        <div className="feat">
          {this.props.campaigns.map(campaign =>
            campaign.featured === true ? (
              <Link
                onClick={()=>this.props.selectCampaign(campaign.id)}
                key={campaign.id}
                to={`/campaign/${campaign.id}`}
              >
                <CampaignCard key={campaign.id} campaign={campaign} />
              </Link>
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
export default connect(mapStateToProps, {selectCampaign})(FeaturedCampaigns );
