import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CampaignCard from "./CampaignCard";
import { randomEight } from "../Actions/campaignsActions";
import { selectCampaign } from "../Actions/campaignsActions";
import "../CssContainer/RecomendedCampaigns.css";

class RecomendedCampaigns extends Component {
  render() {
    const rando = this.props.randomEight(this.props.RandCampaigns);
    return (
      <>
        <h2>Recomended Campaigns</h2>
        <div className="random-campaign">
          {this.props.RandCampaigns ? (
            <>
              {this.props.RandCampaigns.filter(campaign => {
                return rando.includes(campaign.id);
              }).map(matchingCamp => {
                return (
                  <Link
                    onClick={() => this.props.selectCampaign(matchingCamp.id)}
                    key={matchingCamp.id}
                    to={`/campaign/${matchingCamp.id}`}
                  >
                    <CampaignCard
                      key={matchingCamp.id}
                      campaign={matchingCamp}
                    />
                  </Link>
                );
              })}
            </>
          ) : null}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  RandCampaigns: state.campaigns.campaigns
  // .filter(
  //   campaign => (campaign.id === (13,12)))
});
export default connect(
  mapStateToProps,
  { randomEight, selectCampaign }
)(RecomendedCampaigns);
