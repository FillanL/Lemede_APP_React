import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectCampaign } from "../Actions/campaignsActions";
import "../CssContainer/featuredCampaign.css";
import CampaignCard from "./CampaignCard";

const NUM_OF_SHOWN_CAMPAIGNS = 4
class FeaturedCampaigns extends Component {
  render() {
    console.log(NUM_OF_SHOWN_CAMPAIGNS, this.props.featuredCampaigns)
    
    return (
      <>
        <h2>FeaturedCampaigns</h2>
        <div className="feat">
          {this.props.featuredCampaigns.slice(0,NUM_OF_SHOWN_CAMPAIGNS).map(campaign =>
              <Link
                onClick={()=>this.props.selectCampaign(campaign.id)}
                key={campaign.id}
                to={`/campaign/${campaign.id}`}
              >
                <CampaignCard key={campaign.id} campaign={campaign} />
              </Link>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  featuredCampaigns: state.campaigns.campaigns.filter(campaign => campaign.featured)
});
export default connect(mapStateToProps, {selectCampaign})(FeaturedCampaigns );
